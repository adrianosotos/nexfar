import { Card } from './styles'
import QuantityProvider from '../../context/Quantity'
import ProductDetails from './ProductDetails'
import ProductTitle from './ProductTitle'

function ProductCard ({ productData }) {
  return (
    <div>
      <Card>
        <ProductTitle 
          sku={productData.sku}
          name={productData.name}
        />
        <QuantityProvider>
          <ProductDetails 
            img={productData.imageURL}
            base={productData.base}
            price={productData.price?.price}
            availableQuantity={productData.quantityAvailable}
            maker={productData.maker}
            category={productData.category}
            name={productData.name}
            id={productData.id}
            taxes={productData.price?.taxes}
          />
        </QuantityProvider>
      </Card>
    </div>
  )
}

export default ProductCard