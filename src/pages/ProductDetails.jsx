import axios from 'axios'
import React, { useEffect, useState ,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import '../styles/ProductDetails.css'
import { WishlistContext } from '../context/WishlistContext'

const ProductDetails = () => {
    const [prodDetails, setProdDetails] = useState({})
    const { id } = useParams()

    const fetchProductDetails = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
          console.log(response.data);
            setProdDetails(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchProductDetails()
    }, [id])

    const { addToCart } = useContext(CartContext)

    const { addToWishlist } = useContext(WishlistContext)

    return (
        <>
        <div className='product-details'>
            <div className='product-image-container'>
                <img className='product-image' src={prodDetails.image} alt={prodDetails.title} />
            </div>

            <div className='product-info'>
                <p className='product-category'>{prodDetails.category}</p>
                <h2 className='product-title'>{prodDetails.title}</h2>

                <p className='product-rating'>
                    ★ {prodDetails.rating?.rate} / 5
                    <span> ({prodDetails.rating?.count} reviews)</span>
                </p>

                <h3 className='product-price'>₹{prodDetails.price}</h3>
                <p className='product-tax'>Inclusive of all taxes</p>

                <div className='product-divider'></div>

                <h4>Product Description</h4>
                <p className='product-description'>{prodDetails.description}</p>

                <button className='add-cart-btn' onClick={() => addToCart(prodDetails)}>
                    Add to Cart
                </button>
                <button className='add-cart-btn wishlist' onClick={() => addToWishlist(prodDetails)}>
                    Add to Wishlist
                </button>

                <p className='product-delivery'>✓ Available for purchase</p>
            </div>
        </div>
        </>
    )
}

export default ProductDetails