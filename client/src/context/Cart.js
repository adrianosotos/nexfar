import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export default function CartProvider ({ children }) {
  const [cartItems, setCartItems] = useState([])
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart () {
  const context = useContext(CartContext)
  const { cartItems, setCartItems } = context

  return { cartItems, setCartItems }
}
