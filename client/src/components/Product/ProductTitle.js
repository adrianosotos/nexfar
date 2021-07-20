import { ButtonsContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function ProductTitle ({ sku, name }) {
  return (
    <div className="product-title">
      <div className="sku-tag">{sku}</div>
      <h2>{name}</h2>
      <ButtonsContainer>
        <FontAwesomeIcon icon={faBarcode} className="icon"/>
        <FontAwesomeIcon icon={faInfoCircle} className="icon"/>
      </ButtonsContainer>
    </div>
  )
}

export default ProductTitle
