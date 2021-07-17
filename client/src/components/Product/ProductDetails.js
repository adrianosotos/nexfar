import { useQuantity } from '../../context/Quantity'
import { DataContainer, DataItem, NoStockLabel, InStockLabel, Tags } from './styles'
import QuantityInput from "../QuantityInput/QuantityInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faWarehouse, faMobile } from '@fortawesome/free-solid-svg-icons';

function ProductDetails ({ img, base, price = 0, availableQuantity, maker, category }) {
  const { quantity, setQuantity } = useQuantity()

  function calculateTotal () {
    return (quantity * price).toFixed(2)
  }

  return (
    <>
      <DataContainer>
        <img src={img} />
        <DataItem>
          <p>Base</p>
          <p className="prices">
            <span>{base}</span>
            R$ {price}
          </p>
        </DataItem>
        <DataItem>
          <p>Estoque</p>
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
          <p>Quantidade (un)</p>
          <p>
            <QuantityInput 
              maxQuantity={availableQuantity}
            />
          </p>
        </DataItem> 
        <DataItem>
          <p>Valor</p>
          <p>R$ {calculateTotal()}</p>
        </DataItem>
        <DataItem>
          <FontAwesomeIcon onClick={() => setQuantity(0)} icon={faTrash} className="bin" />
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