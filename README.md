# Template Shop

A modern web application for selling and managing website templates, inspired by Wix.com. This project includes both frontend and backend components, providing a complete solution for template management, user authentication, payments, and template customization.

## Features

- **Template Management**
  - Browse and search templates
  - Filter by category and complexity
  - Sort by popularity, newest, and price
  - Preview templates before purchase
  - Detailed template information and features

- **User Authentication**
  - User registration and login
  - JWT-based authentication
  - Role-based access control (admin/user)

- **E-commerce**
  - Secure payment processing with Stripe
  - Shopping cart functionality
  - Order management
  - Download tracking
  - Refund processing

- **Template Customization**
  - Color schemes
  - Font selection
  - Layout options
  - Preview changes in real-time

- **User Dashboard**
  - View purchased templates
  - Download history
  - Order history
  - Favorite templates
  - Profile management

## Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- React Router for navigation
- Tailwind CSS for styling

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Stripe for payments
- Nodemailer for email notifications

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- Stripe account for payments
- SMTP server for emails

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/template-shop.git
   cd template-shop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/template-shop
   JWT_SECRET=your-secret-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   EMAIL_SERVICE_HOST=smtp.example.com
   EMAIL_SERVICE_PORT=587
   EMAIL_SERVICE_USER=your-email
   EMAIL_SERVICE_PASS=your-password
   ```

4. Seed the database with sample templates:
   ```bash
   npm run seed
   ```

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Start the backend server:
   ```bash
   npm run server
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## API Documentation

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user
- POST `/api/auth/logout` - Logout user

### Templates
- GET `/api/templates` - Get all templates
- GET `/api/templates/:id` - Get single template
- POST `/api/templates` - Create template (admin)
- PUT `/api/templates/:id` - Update template (admin)
- DELETE `/api/templates/:id` - Delete template (admin)
- POST `/api/templates/:id/reviews` - Add review
- POST `/api/templates/:id/favorite` - Toggle favorite

### Orders
- POST `/api/orders/create-payment-intent` - Create payment intent
- POST `/api/orders` - Create order
- GET `/api/orders/my-orders` - Get user's orders
- GET `/api/orders/:id` - Get order details
- GET `/api/orders/:id/download` - Download template
- POST `/api/orders/:id/refund` - Request refund

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by Wix.com's template marketplace
- Icons from Lucide React
- Sample templates and images are placeholders 