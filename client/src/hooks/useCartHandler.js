import { useCart } from '../context/Cart'

export function useCartHandler (id, price, name) {
  const { cartItems, setCartItems } = useCart()

  function isProductOnCart (id) {
    return cartItems.some(item => item.id === id)
  }

  function updateTotalPrice (totalPrice) {
    return cartItems.map(item => {
      if (item.id === id) {
        item.price = totalPrice
      }

      return item
    })
  }

  function onQuantityAdded (quantity) {
    const totalPrice = quantity * price

    if (isProductOnCart(id)) {
      return setCartItems(updateTotalPrice(totalPrice))
    }

    return setCartItems([...cartItems, { id, name, price: totalPrice }])
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
    debugger
    const totalPrice = quantity * price

    if (totalPrice === 0) {
      const updatedCart = removeItemFromCart(id)
      return setCartItems(updatedCart)
    }

    return setCartItems(updateTotalPrice(totalPrice))
  }

  return {
    onQuantityAdded,
    onQuantityRemoved
  }
}