import { useState } from 'react'

function QuantityInput ({ maxQuantity, onQuantityChange }) {
  const [quantity, setQuantity] = useState(0)

  function handleQuantityChange (type) {
    if (type === 'plus' && quantity < maxQuantity) {
      const newQuantity = +quantity + 1
      setQuantity(newQuantity)
      onQuantityChange(newQuantity)

    } else if (type === 'minus' && quantity > 0) {
      const newQuantity = +quantity - 1
      setQuantity(newQuantity)
      onQuantityChange(newQuantity)
    }
  }

  function handleInputChange (e) {
    const value = +e.target.value

    if (value >= 0 && value <= maxQuantity) {
      setQuantity(e.target.value)
      onQuantityChange(e.target.value)
    }
  }

  return (
    <div>
      <button onClick={() => handleQuantityChange('minus')}>-</button>
      <input type="text" value={quantity} onChange={(e) => handleInputChange(e)}/>
      <button onClick={() => handleQuantityChange('plus')}>+</button>
    </div>
  )
}

export default QuantityInput