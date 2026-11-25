import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import '../styles/Cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cart , removeFromCart , updateQuantity} = useContext(CartContext)

  const totalPrice = cart.reduce((total,item)=>{
    return total + (item.price * item.quantity)
  }, 0)

  return (
    <>
      <div className='cart-page'>
        <h2 className='cart-heading'>Shopping Cart</h2>

        <div className='cart-layout'>
          <div className='cart-items'>
            {
              cart.map((item)=>(
                <div className='cart-item' key={item.id}>
                  <img className='cart-image' src={item.image} alt={item.title} />

                  <div className='cart-item-details'>
                    <p className='cart-item-title'>{item.title}</p>
                    <p className='cart-item-price'>₹{item.price.toFixed(2)}</p>

                    <div className='quantity-controls'>
                      <button onClick={()=>updateQuantity(item.id , -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={()=>updateQuantity(item.id , 1)}>+</button>
                    </div>

                    <button className='remove-btn' onClick={()=>removeFromCart(item.id)}>Remove</button>
                  </div>

                  <p className='cart-item-total'>₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))
            }
          </div>

          <div className='cart-summary'>
            <h3>Order Summary</h3>

            <div className='summary-row'>
              <span>Subtotal</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <div className='summary-row'>
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>

            <div className='summary-total'>
              <span>Total Price</span>
              <span>₹{totalPrice.toFixed(2)}</span>
              {
                cart.length > 0 && (
                <Link to="/checkout"><button>Proceed to Checkout</button></Link>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart