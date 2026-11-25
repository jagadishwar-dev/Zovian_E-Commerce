
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import '../styles/Checkout.css'

const Checkout = () => {

    const [shippingDetails, setShippingDetails] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: ''
    })

    const [paymentMethod, setPaymentMethod] = useState('COD')

    const handleChange = (e) => {
        setShippingDetails({
            ...shippingDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
    e.preventDefault()

    if (cart.length === 0) {
        alert('Your cart is empty')
        return
    }

    const orderDetails = {
        shippingDetails,
        paymentMethod,
        items: cart,
        totalPrice
    }

    console.log('Order placed:', orderDetails)

    clearCart()
    alert('Order placed successfully!')
}

    const { cart , clearCart }=useContext(CartContext)

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity,0)

    return (
        <div className='checkout-page'>
            <h2>Checkout</h2>

            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input
                    type='text'
                    name='fullName'
                    value={shippingDetails.fullName}
                    onChange={handleChange}
                    required
                />

                <label>Email Address</label>
                <input
                    type='email'
                    name='email'
                    value={shippingDetails.email}
                    onChange={handleChange}
                    required
                />

                <label>Phone Number</label>
                <input
                    type='tel'
                    name='phone'
                    value={shippingDetails.phone}
                    onChange={handleChange}
                    required
                />

                <label>Delivery Address</label>
                <textarea
                    name='address'
                    value={shippingDetails.address}
                    onChange={handleChange}
                    required
                />

                <button type='submit'>Continue</button>
            </form>


        <div className='order-summary'>
    <h3>Order Summary</h3>

    {
        cart.map((item) => (
            <div key={item.id} className='order-item'>
                <img src={item.image} alt={item.title} />
                <div>
                    <p>{item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
        ))
    }

        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
    </div>

    <div className='payment-method'>
    <h3>Payment Method</h3>

        <label>
            <input
            type='radio'
            name='paymentMethod'
            value='COD'
            checked={paymentMethod === 'COD'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery (COD)
        </label>
        </div>

    </div>
    )
}

export default Checkout