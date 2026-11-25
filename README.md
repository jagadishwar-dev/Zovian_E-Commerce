# Zovian – E-Commerce Website

Zovian is a responsive e-commerce web application developed using React.js. It allows users to browse products, search and filter items, view product details, manage their cart and wishlist, and authenticate using Auth0.

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- React Router
- Axios
- Auth0 Authentication
- Fake Store API
- Vite

## Features

- Responsive user interface
- Product listing and category-based browsing
- Search and filter products
- Product sorting
- Individual product details
- Add and remove products from cart
- Update product quantities
- Wishlist management
- User authentication using Auth0
- Product data fetched using Fake Store API

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/jagadishwar-dev/Zovian_E-Commerce.git
   ```

2. Navigate to the project folder:

   ```bash
   cd Zovian_E-Commerce
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and configure your Auth0 details:

   ```env
   VITE_AUTH0_DOMAIN=your_auth0_domain
   VITE_AUTH0_CLIENT_ID=your_auth0_client_id
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL displayed in your terminal.

## Environment Variables

The project uses Auth0 for authentication. Configure the following environment variables in your local `.env` file:

- `VITE_AUTH0_DOMAIN`
- `VITE_AUTH0_CLIENT_ID`

Do not upload your `.env` file to GitHub.

## API

Product information is fetched from [Fake Store API](https://fakestoreapi.com/).

## Developer

**Jagadishwar**

GitHub: https://github.com/jagadishwar-dev

## Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Products Page
![Products Page](screenshots/products.png)

### Product Details
![Product Details](screenshots/product-details.png)

### Shopping Cart
![Shopping Cart](screenshots/cart.png)