import { Card } from '../styles/styles'
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
        <ProductDetails 
          img={productData.imageURL}
          base={productData.base}
          price={productData.price?.price}
          availableQuantity={productData.quantityAvailable}
        />
      </Card>
    </div>
  )
}

export default ProductCard