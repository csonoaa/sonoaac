const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/Order');
const Template = require('../models/Template');
const User = require('../models/User');
const { auth } = require('../middleware/auth');
const { sendEmail } = require('../utils/email');

const router = express.Router();

// Create payment intent
router.post('/create-payment-intent', auth, async (req, res) => {
  try {
    const { templateId } = req.body;
    const template = await Template.findById(templateId);

    if (!template) {
      return res.status(404).json({
        success: false,
        message: 'Template not found'
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(template.price * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        templateId,
        userId: req.user._id.toString()
      }
    });

    res.json({
      success: true,
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// Create order
router.post('/', auth, async (req, res) => {
  try {
    const { templateId, paymentIntentId, customization } = req.body;
    const template = await Template.findById(templateId);

    if (!template) {
      return res.status(404).json({
        success: false,
        message: 'Template not found'
      });
    }

    // Verify payment intent
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== 'succeeded') {
      return res.status(400).json({
        success: false,
        message: 'Payment not completed'
      });
    }

    // Create order
    const order = new Order({
      user: req.user._id,
      template: templateId,
      amount: template.price,
      status: 'completed',
      paymentIntentId,
      paymentMethod: 'stripe',
      customization
    });

    await order.save();

    // Update user's purchased templates
    const user = req.user;
    user.purchasedTemplates.push({
      template: templateId,
      order: order._id,
      purchasedAt: new Date()
    });
    await user.save();

    // Send confirmation email
    await sendEmail({
      to: user.email,
      subject: 'Template Purchase Confirmation',
      html: `
        <h1>Thank you for your purchase!</h1>
        <p>Your template "${template.name}" has been purchased successfully.</p>
        <p>Order ID: ${order._id}</p>
        <p>Amount: $${template.price}</p>
        <p>You can download your template from your account dashboard.</p>
      `
    });

    res.status(201).json({
      success: true,
      order
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// Get user's orders
router.get('/my-orders', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate('template')
      .sort('-createdAt');

    res.json({
      success: true,
      orders
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// Get order details
router.get('/:id', auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('template')
      .populate('user', 'name email');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check if user is authorized to view this order
    if (order.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view this order'
      });
    }

    res.json({
      success: true,
      order
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// Download template
router.get('/:id/download', auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('template');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check if user is authorized to download
    if (order.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to download this template'
      });
    }

    // Update download count and timestamp
    order.downloadCount += 1;
    order.lastDownloadAt = new Date();
    await order.save();

    // Send download link via email
    await sendEmail({
      to: req.user.email,
      subject: 'Template Download Link',
      html: `
        <h1>Your Template Download Link</h1>
        <p>Here's your download link for "${order.template.name}":</p>
        <p><a href="${order.template.downloadUrl}">Click here to download</a></p>
        <p>This link will expire in 24 hours.</p>
      `
    });

    res.json({
      success: true,
      downloadUrl: order.template.downloadUrl
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// Request refund
router.post('/:id/refund', auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check if user is authorized to request refund
    if (order.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to request refund for this order'
      });
    }

    // Check if order is eligible for refund (within 14 days)
    const daysSincePurchase = Math.floor(
      (Date.now() - order.createdAt) / (1000 * 60 * 60 * 24)
    );

    if (daysSincePurchase > 14) {
      return res.status(400).json({
        success: false,
        message: 'Order is not eligible for refund (must be within 14 days)'
      });
    }

    // Process refund through Stripe
    const refund = await stripe.refunds.create({
      payment_intent: order.paymentIntentId
    });

    if (refund.status === 'succeeded') {
      order.status = 'refunded';
      await order.save();

      // Update user's purchased templates
      const user = req.user;
      user.purchasedTemplates = user.purchasedTemplates.filter(
        purchase => purchase.order.toString() !== order._id.toString()
      );
      await user.save();

      // Send refund confirmation email
      await sendEmail({
        to: req.user.email,
        subject: 'Refund Confirmation',
        html: `
          <h1>Refund Confirmation</h1>
          <p>Your refund for order ${order._id} has been processed successfully.</p>
          <p>Amount: $${order.amount}</p>
          <p>The refund will be credited to your original payment method.</p>
        `
      });

      res.json({
        success: true,
        message: 'Refund processed successfully'
      });
    } else {
      throw new Error('Refund failed');
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router; 