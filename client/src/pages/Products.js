import { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import Axios from 'axios'
import ProductCard from '../components/ProductCard'

function Products () {
  const [products, setProducts] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    Axios.get('http://localhost:5000/products').then(res => {
      setProducts(res.data)
    })

  }, [])

  function getShownProducts () {
    const final = offset + 3
    const sliced = products.slice(offset, final)

    return sliced
  }
  
  return (
    <div>
      {
        getShownProducts().map(product => <ProductCard productData={product} />)
      }
      {
        products.length && (
          <Pagination 
            limit={3} 
            total={products.length} 
            offset={offset}
            setOffset={setOffset} 
          />
        )
      }
    </div>
  )
}

export default Products