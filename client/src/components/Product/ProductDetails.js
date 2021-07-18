import { useQuantity } from '../../context/Quantity'
import { useCartHandler } from '../../hooks/useCartHandler'
import { DataContainer, DataItem, NoStockLabel, InStockLabel, Tags, Title } from './styles'
import QuantityInput from "../QuantityInput/QuantityInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faWarehouse, faMobile } from '@fortawesome/free-solid-svg-icons';
import { brazilianRealMask } from '../../utils/utils'

function ProductDetails ({ img, base, price = 0, availableQuantity, maker, category, name, id }) {
  const { quantity, setQuantity } = useQuantity(id)
  const { onQuantityAdded, onQuantityRemoved } = useCartHandler(id, price, name)

  function calculateTotal () {
    return brazilianRealMask(quantity * price)
  }

  function removeProduct () {
    onQuantityRemoved(0)
    setQuantity(0)
  }

  return (
    <>
      <DataContainer>
        <img src={img} />
        <DataItem>
          <Title>Base</Title>
          <p className="prices">
            <span>{base}</span>
            {brazilianRealMask(price)}
          </p>
        </DataItem>
        <DataItem>
          <Title>Estoque</Title>
          <p>
            {
              availableQuantity === 0 ?
                (<NoStockLabel>
                  <FontAwesomeIcon icon={faMobile} />
                  <div className="labels">
                    <p>SEM ESTOQUE</p>
                    <button>AVISE-ME</button>
                  </div>
                </NoStockLabel>
                ) : (
                  <InStockLabel>
                    <FontAwesomeIcon icon={faWarehouse} />
                    <p>{`${availableQuantity} un`}</p>
                  </InStockLabel>
                )
            }
          </p>
        </DataItem>
        <DataItem>
          <Title>Quantidade (un)</Title>
          <p>
            <QuantityInput 
              maxQuantity={availableQuantity}
              onQuantityAdded={onQuantityAdded}
              onQuantityRemoved={onQuantityRemoved}
              productId={id}
            />
          </p>
        </DataItem> 
        <DataItem>
          <Title>Valor</Title>
          <p>{calculateTotal()}</p>
        </DataItem>
        <DataItem>
          <FontAwesomeIcon onClick={removeProduct} icon={faTrash} className="bin" />
        </DataItem>
      </DataContainer>
      <Tags>
        <p>{maker}</p>
        <p>{category}</p>
      </Tags>
    </>
  )
}

export default ProductDetails