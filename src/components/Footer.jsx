import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className='foot'>
      <div>
        <h2>Zovian</h2>
        <p>Discover your everyday style.</p>
        <p>Fashion, jewellery and electronics for your lifestyle.</p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">All Products</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>

      <div>
        <h3>Customer Support</h3>
        <ul>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
          <li><Link to="/shipping">Shipping Information</Link></li>
          <li><Link to="/returns">Returns Policy</Link></li>
        </ul>
      </div>

      <div>
        <h3>Legal</h3>
        <ul>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms and Conditions</Link></li>
        </ul>
      </div>
    </div>

      </footer>

            <br />

      <div className='copy-right'>
        <p>© 2026 Zovian. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer