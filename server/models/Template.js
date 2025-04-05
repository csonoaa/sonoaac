const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  features: [{
    type: String,
    trim: true
  }],
  image: {
    type: String,
    required: true
  },
  previewUrl: {
    type: String,
    required: true
  },
  downloadUrl: {
    type: String,
    required: true
  },
  complexity: {
    type: String,
    enum: ['basic', 'advanced', 'premium'],
    required: true
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  reviewCount: {
    type: Number,
    default: 0
  },
  popular: {
    type: Boolean,
    default: false
  },
  new: {
    type: Boolean,
    default: true
  },
  customizationOptions: {
    colors: [{
      name: String,
      value: String
    }],
    fonts: [{
      name: String,
      value: String
    }],
    layouts: [{
      name: String,
      value: String
    }]
  },
  tags: [{
    type: String,
    trim: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the average rating when reviews change
templateSchema.pre('save', function(next) {
  if (this.reviews.length > 0) {
    this.rating = this.reviews.reduce((acc, review) => acc + review.rating, 0) / this.reviews.length;
    this.reviewCount = this.reviews.length;
  }
  this.updatedAt = Date.now();
  next();
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template; 