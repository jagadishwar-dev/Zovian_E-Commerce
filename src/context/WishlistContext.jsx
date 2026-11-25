import React, { createContext, useState } from 'react'

export const WishlistContext = createContext()

export const WishlistProvider=({children})=>{

    const [wishlist, setWishlist] = useState(()=>{
        const savedWishlist=localStorage.getItem('wishlist')
        return savedWishlist ? JSON.parse(savedWishlist) : []
    })

    const addToWishlist=(product)=>{
        const exixtingProduct=wishlist.find(item => item.id === product.id)
        
        if (exixtingProduct) {
            alert("Already added to wishlist")
            return
        }
        
        const updatedWishlist = [...wishlist , product]

        setWishlist(updatedWishlist)
        localStorage.setItem('wishlist' , JSON.stringify(updatedWishlist))

        alert('Added to the wishlist')
    }

    const removeFromWishlist=(productId)=>{
        const updatedWishlist=wishlist.filter(item => item.id !== productId)

        setWishlist(updatedWishlist)
        localStorage.setItem('wishlist' , JSON.stringify(updatedWishlist))
    }

    return (
        <WishlistContext.Provider value={{wishlist , addToWishlist , removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}
    

