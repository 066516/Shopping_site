import React from 'react'
import { useContext } from 'react'
import { shop_context } from '../../context/shop-context'
export const CartItem = (props) => {
    const { id, productName, productImage, price } = props.data
    const { cartItems,addToCart,removeToCart,updateItem} = useContext(shop_context)

    return (
        <div className='cartItem'>
            <img src={productImage} alt='' />
            <div className='desc'>
                <p>
                    {productName}
                </p>
                <p>
                    {price}
                </p>
                <div className='countHandler'>

                    <button onClick={()=>{addToCart(id)}}>+</button>
                    <input value={cartItems[id]} onChange={(e)=>{updateItem (Number (e.target.value),id)}}/>
                    <button onClick={()=>{removeToCart(id)}}>-</button>
                </div>
            </div>
        </div>
    )
}

