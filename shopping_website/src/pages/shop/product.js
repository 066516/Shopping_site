import React, { useContext } from 'react'
import { shop_context } from '../../context/shop-context'
export const Product = (props) => {
    const { id, productName, productImage, price } = props.data
    const { addToCart, cartItems } = useContext(shop_context)
    return (
        <div className='product'>
            <img src={productImage} alt={productName} />
            <div className='desc'>
                <p>
                    {productName}
                </p>
                <p>
                    {price}$
                </p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to cart {cartItems[id] > 0 && <>({cartItems[id]})</>}</button>

        </div>
    )
}

