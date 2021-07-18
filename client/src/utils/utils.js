export function brazilianRealMask (value) {
  if (!value) {
    return 'R$ 0,00'
  }

  return `R$ ${value.toFixed(2).replace('.', ',')}`
}

export function getCartItemsFromLocalStorage () {
  const items = { ...localStorage }
  const cartData = []

  for (const key in items) {
    if (/cart-item/.test(items[key])) {
      try {
        const parsedData = JSON.parse(items[key])
        cartData.push(parsedData)
      } catch (error) {
        console.error('Failed to parse item')
      }
    }
  }

  return cartData
}