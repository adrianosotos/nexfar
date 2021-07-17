import { useState } from 'react'
import QuantityInput from "./QuantityInput";

function ProductDetails ({ img, base, price, availableQuantity }) {
  const [total, setTotal] = useState(0)

  function onQuantityChange (newQuantity) {
    const newTotal = (newQuantity * price).toFixed(2)
    setTotal(newTotal)
  }
  return (
    <div className="product-details">
      <img src={img} />
      <div className="product-info">
        <table>
          <thead>
            <tr>
              <th>Base</th>
              <th>Estoque</th>
              <th>Quantidade (un)</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="prices">
                <span>{base}</span>
                {price}
              </td>
              <td>{availableQuantity} un</td>
              <td>
                <QuantityInput 
                  maxQuantity={availableQuantity}
                  onQuantityChange={onQuantityChange}
                />
              </td>
              <td>R$ {total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductDetails