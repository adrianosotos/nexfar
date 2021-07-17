import { Card } from '../styles/styles'
import QuantityProvider from '../context/Quantity'
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
          />
        </QuantityProvider>
      </Card>
    </div>
  )
}

export default ProductCard