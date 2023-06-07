import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../product';
export const shop_context = createContext(null)
const getDefaultCart = () => {
    let cart = {}
    for (let index = 1; index < PRODUCTS.length + 1; index++) {
        cart[index] = 0
    }
    return cart;
}
export const ShopContext = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const addToCart = (itemID) => {
        setCartItems((prev) => ({
            ...prev,
            [itemID]: prev[itemID]+1

        }))
    }
    const removeToCart = (itemID) => {
        setCartItems((prev) => ({
            ...prev,
            [itemID]: prev[itemID ]-1

        }))
    }
    const updateItem=(newCount,id)=>{
        setCartItems(
            (prev) => ({
                ...prev,
                [id]: newCount,
    
            })

        )

    }
    console.log(cartItems);
    const contextValue={cartItems,addToCart,removeToCart,updateItem}
    return (
        <shop_context.Provider value={contextValue}>
            {props.children}
        </shop_context.Provider>
    )
}

