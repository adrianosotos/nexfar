import React, { createContext, useState, useContext } from 'react'
import { getCartItemsFromLocalStorage } from '../utils/utils'

const QuantityContext = createContext()

export default function QuantityProvider ({ children }) {
  const [quantity, setQuantity] = useState(0)
  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  )
}

export function useQuantity (productId) {
  const context = useContext(QuantityContext)
  const { quantity, setQuantity } = context

  const cachedQuantity = getCartItemsFromLocalStorage().reduce((quantity, item) => {
    if (item.id === productId) {
      quantity = item.quantity
    }

    return quantity
  }, 0)

  const updatedQuantity = cachedQuantity || quantity

  return { quantity: updatedQuantity, setQuantity }
}
