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

export function cnpjMask (value) {
  if (!value) {
    return
  }

  let stringValue = value.toString()

  stringValue=stringValue.replace(/\D/g,"")
  stringValue=stringValue.replace(/^(\d{2})(\d)/,"$1.$2")
  stringValue=stringValue.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
  stringValue=stringValue.replace(/\.(\d{3})(\d)/,".$1/$2")
  stringValue=stringValue.replace(/(\d{4})(\d)/,"$1-$2")
    
  return stringValue
}