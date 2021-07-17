import React, { createContext, useState, useContext } from 'react'

const QuantityContext = createContext()

export default function QuantityProvider ({ children }) {
  const [quantity, setQuantity] = useState(0)
  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  )
}

export function useQuantity () {
  const context = useContext(QuantityContext)
  const { quantity, setQuantity } = context

  return { quantity, setQuantity }
}
