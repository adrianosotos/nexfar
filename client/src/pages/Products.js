import { useEffect, useState } from 'react'
import Axios from 'axios'
import ProductCard from '../components/ProductCard'

function Products () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:5000/products').then(res => {
      setProducts(res.data)
    })

  }, [])
  
  return (
    <div>
      {
        products.map(product => <ProductCard productData={product} />)
      }
    </div>
  )
}

export default Products