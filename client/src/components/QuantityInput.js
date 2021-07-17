import { useQuantity } from '../context/Quantity'
import { Input } from '../styles/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function QuantityInput ({ maxQuantity }) {
  const { quantity, setQuantity } = useQuantity()
  
  function handleQuantityChange (type) {
    if (type === 'plus' && quantity < maxQuantity) {
      const newQuantity = +quantity + 1
      setQuantity(newQuantity)

    } else if (type === 'minus' && quantity > 0) {
      const newQuantity = +quantity - 1
      setQuantity(newQuantity)
    }
  }

  return (
    <Input>
      <FontAwesomeIcon 
        icon={faMinus} 
        onClick={() => handleQuantityChange('minus')}
        className={quantity === 0 ? 'disabled' : 'minus'}
      >-</FontAwesomeIcon>
      <span>{quantity} un</span>
      <FontAwesomeIcon 
        icon={faPlus} 
        onClick={() => handleQuantityChange('plus')}
        className={quantity >= maxQuantity ? 'disabled' : 'add'}
        >+</FontAwesomeIcon>
    </Input>
  )
}

export default QuantityInput