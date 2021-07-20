import React, { createContext, useState, useContext } from 'react'
import { brazilianRealMask, getCartItemsFromLocalStorage } from '../utils/utils'

const CartContext = createContext()

export default function CartProvider ({ children }) {
  const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage())

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart () {
  const context = useContext(CartContext)
  const { cartItems, setCartItems } = context

  function calculateCartTotal () {
    return cartItems.reduce((total, item) => {
      total = total + item.price
      return total
    }, 0)
  }

  function calculateTotalDiscount () {
    return cartItems.reduce((total, item) => {
      total = total + item.taxes
      return total
    }, 0)
  }

  const cartTotal = calculateCartTotal()
  const totalDiscounts = calculateTotalDiscount()
  const finalPrice = cartTotal + totalDiscounts
  const formattedTotal = brazilianRealMask(cartTotal)
  const formattedTotalDiscounts = brazilianRealMask(totalDiscounts)
  const formattedFinalPrice = brazilianRealMask(finalPrice)

  return { cartItems, setCartItems, cartTotal, formattedTotal, totalDiscounts, formattedTotalDiscounts, formattedFinalPrice }
}
