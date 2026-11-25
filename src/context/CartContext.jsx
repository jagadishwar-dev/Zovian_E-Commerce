import { createContext, useState } from "react";

export const CartContext=createContext()

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    const addToCart = (product)=>{
        const existingProduct=cart.find(item=>item.id === product.id)

        let updatedCart;

        if (existingProduct) {
            updatedCart=cart.map((item)=>
                item.id === product.id ? {...item , quantity:item.quantity+1} : item
            )
        } else {
            updatedCart = [...cart, {...product , quantity:1}]
        }

        setCart(updatedCart)
        localStorage.setItem('cart' , JSON.stringify(updatedCart))

        alert('Added to the cart')
    }

    const removeFromCart=(productId)=>{
        const updatedCart=cart.filter(item=>item.id!==productId)
        setCart(updatedCart)
        localStorage.setItem('cart',JSON.stringify(updatedCart))
    }

    const updateQuantity=(productId,change)=>{
        const updatecart=cart.map((item)=>
            item.id===productId ? {...item , quantity:item.quantity+change} : item
        ).filter(item=>item.quantity>0)

        setCart(updatecart)
        localStorage.setItem('cart',JSON.stringify(updatecart))
    }

    const clearCart = () => {
        setCart([])
        localStorage.removeItem('cart')
    }

    return (
        <CartContext.Provider value={{cart , addToCart , removeFromCart , updateQuantity , clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
