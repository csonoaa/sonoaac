const mongoose = require('mongoose');
const Template = require('../models/Template');
require('dotenv').config();

const sampleTemplates = [
  {
    name: 'Modern Business Website',
    category: 'Business',
    description: 'A professional and modern business website template with a clean design.',
    price: 49.99,
    features: [
      'Responsive Design',
      'Contact Form',
      'Blog Section',
      'Portfolio Gallery',
      'Testimonials Section'
    ],
    image: '/images/templates/business-modern.jpg',
    previewUrl: 'https://demo-business-modern.example.com',
    downloadUrl: '/templates/business-modern.zip',
    complexity: 'basic',
    rating: 4.5,
    reviews: [],
    reviewCount: 0,
    popular: true,
    new: true,
    customizationOptions: {
      colors: ['#007bff', '#28a745', '#dc3545'],
      fonts: ['Roboto', 'Open Sans', 'Montserrat'],
      layout: ['standard', 'wide', 'boxed']
    },
    tags: ['business', 'modern', 'responsive', 'professional']
  },
  {
    name: 'E-commerce Store',
    category: 'E-commerce',
    description: 'A full-featured e-commerce template with product catalog and shopping cart.',
    price: 79.99,
    features: [
      'Product Catalog',
      'Shopping Cart',
      'User Authentication',
      'Payment Integration',
      'Order Management'
    ],
    image: '/images/templates/ecommerce-store.jpg',
    previewUrl: 'https://demo-ecommerce-store.example.com',
    downloadUrl: '/templates/ecommerce-store.zip',
    complexity: 'advanced',
    rating: 4.8,
    reviews: [],
    reviewCount: 0,
    popular: true,
    new: false,
    customizationOptions: {
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1'],
      fonts: ['Poppins', 'Lato', 'Source Sans Pro'],
      layout: ['standard', 'wide']
    },
    tags: ['ecommerce', 'shop', 'store', 'products']
  },
  {
    name: 'Portfolio Showcase',
    category: 'Portfolio',
    description: 'A creative portfolio template for showcasing your work and projects.',
    price: 39.99,
    features: [
      'Project Gallery',
      'About Section',
      'Skills Display',
      'Contact Form',
      'Social Media Integration'
    ],
    image: '/images/templates/portfolio-showcase.jpg',
    previewUrl: 'https://demo-portfolio-showcase.example.com',
    downloadUrl: '/templates/portfolio-showcase.zip',
    complexity: 'basic',
    rating: 4.3,
    reviews: [],
    reviewCount: 0,
    popular: false,
    new: true,
    customizationOptions: {
      colors: ['#2d3436', '#0984e3', '#00b894'],
      fonts: ['Playfair Display', 'Raleway', 'Merriweather'],
      layout: ['standard', 'minimal']
    },
    tags: ['portfolio', 'creative', 'showcase', 'projects']
  },
  {
    name: 'Restaurant Website',
    category: 'Food & Restaurant',
    description: 'A beautiful template for restaurants and food businesses.',
    price: 59.99,
    features: [
      'Menu Display',
      'Reservation System',
      'Food Gallery',
      'Location Map',
      'Reviews Section'
    ],
    image: '/images/templates/restaurant-website.jpg',
    previewUrl: 'https://demo-restaurant-website.example.com',
    downloadUrl: '/templates/restaurant-website.zip',
    complexity: 'advanced',
    rating: 4.6,
    reviews: [],
    reviewCount: 0,
    popular: true,
    new: false,
    customizationOptions: {
      colors: ['#e17055', '#fdcb6e', '#00b894'],
      fonts: ['Cormorant Garamond', 'Montserrat', 'Playfair Display'],
      layout: ['standard', 'wide']
    },
    tags: ['restaurant', 'food', 'menu', 'reservation']
  },
  {
    name: 'Blog Platform',
    category: 'Blog',
    description: 'A modern blog template with advanced features for content creators.',
    price: 44.99,
    features: [
      'Blog Posts',
      'Categories',
      'Comments System',
      'Newsletter Integration',
      'Social Sharing'
    ],
    image: '/images/templates/blog-platform.jpg',
    previewUrl: 'https://demo-blog-platform.example.com',
    downloadUrl: '/templates/blog-platform.zip',
    complexity: 'basic',
    rating: 4.4,
    reviews: [],
    reviewCount: 0,
    popular: false,
    new: true,
    customizationOptions: {
      colors: ['#6c5ce7', '#a8a4e6', '#00cec9'],
      fonts: ['Merriweather', 'Open Sans', 'Source Sans Pro'],
      layout: ['standard', 'magazine']
    },
    tags: ['blog', 'content', 'writing', 'articles']
  }
];

const seedTemplates = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Clear existing templates
    await Template.deleteMany({});

    // Insert sample templates
    await Template.insertMany(sampleTemplates);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedTemplates(); 