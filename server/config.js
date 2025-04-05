require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/template-shop',
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  EMAIL_SERVICE: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  },
  TEMPLATE_STORAGE_PATH: process.env.TEMPLATE_STORAGE_PATH || './uploads/templates',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000'
}; 