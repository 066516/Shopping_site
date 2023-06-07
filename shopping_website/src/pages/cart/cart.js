import React from 'react'
import { PRODUCTS } from '../../product'
import { useContext } from 'react'
import { shop_context } from '../../context/shop-context'
import { CartItem } from './cartItem'
import "./cart.css"
export const Cart = () => {
  const { cartItems } = useContext(shop_context)
  return (
    <div className='cart'>
      <h1>your carts</h1>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {

          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        }
        )}
      </div>

    </div>
  )
}

