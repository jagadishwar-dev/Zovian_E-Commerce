import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'
import '../styles/Wishlist.css'

const Wishlist = () => {
    const { wishlist , removeFromWishlist} = useContext(WishlistContext)
return (
    <>
        <div className='wishlist-page'>
            <h2 className='wishlist-heading'>My Wishlist</h2>

            <div className='wishlist-items'>
                {
                    wishlist.map((item) => (
                        <div key={item.id} className='wishlist-item'>
                            <div className='wishlist-image-container'>
                                <img src={item.image} alt={item.title} />
                            </div>

                            <div className='wishlist-details'>
                                <p className='wishlist-title'>{item.title}</p>
                                <p className='wishlist-price'>₹{item.price.toFixed(2)}</p>

                                <button className='wishlist-remove-btn' onClick={() => removeFromWishlist(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
)
}

export default Wishlist