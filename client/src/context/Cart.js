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

export function useCart (id, price, name, taxes) {
  const context = useContext(CartContext)
  const { cartItems, setCartItems } = context

  function isProductOnCart (id) {
    return cartItems.some(item => item.id === id)
  }

  function updateTotalPrice (totalPrice, quantity, finalPrice) {
    return cartItems.map(item => {
      if (item.id === id) {
        item.price = totalPrice
        item.quantity = quantity
        item.finalPrice = finalPrice
      }

      return item
    })
  }

  function onQuantityAdded (quantity) {
    const totalPrice = quantity * price
    const totalTaxes = quantity * taxes
    const finalPrice = totalPrice + totalTaxes

    if (isProductOnCart(id)) {
      localStorage.setItem(id, JSON.stringify({ id, name, price: totalPrice, quantity, taxes: totalTaxes, finalPrice, label: 'cart-item'}))
      return setCartItems(updateTotalPrice(totalPrice, quantity, finalPrice))
    }

    localStorage.setItem(id, JSON.stringify({ id, name, price: totalPrice, quantity, taxes: totalTaxes, finalPrice, label: 'cart-item'}))
    return setCartItems([...cartItems, { id, name, price: totalPrice, quantity, taxes: totalTaxes, finalPrice, label: 'cart-item' }])
  }

  function removeItemFromCart (id) {
    return cartItems.reduce((updatedCart, item) => {
      if (item.id !== id) {
        updatedCart.push(item)
      }

      return updatedCart
    }, [])
  }

  function onQuantityRemoved (quantity) {
    const totalPrice = quantity * price
    const totalTaxes = quantity * taxes
    const finalPrice = totalPrice + totalTaxes

    if (totalPrice === 0) {
      const updatedCart = removeItemFromCart(id)
      localStorage.removeItem(id)
      return setCartItems(updatedCart)
    }

    localStorage.setItem(id, JSON.stringify({ id, name, price: totalPrice, quantity, taxes: totalTaxes, finalPrice, label: 'cart-item' }))
    return setCartItems(updateTotalPrice(totalPrice, quantity, finalPrice))
  }

  function getStorageItemIds () {
    return getCartItemsFromLocalStorage().map(item => item.id)
  }

  function emptyCart () {
    setCartItems([])
    getStorageItemIds().forEach(id => localStorage.removeItem(id))
  }

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

  return { 
    cartItems,
    setCartItems,
    cartTotal,
    formattedTotal,
    totalDiscounts,
    formattedTotalDiscounts,
    formattedFinalPrice,
    onQuantityAdded,
    onQuantityRemoved,
    emptyCart
  }
}
