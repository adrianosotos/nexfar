import { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import Axios from 'axios'
import ProductCard from '../../components/Product/ProductCard'
import { Container, FiltersContainer, SearchContainer, SearchBarButton, SelectContainer, Select } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Products () {
  const [products, setProducts] = useState([])
  const [productPerPage, setProductPerPage] = useState(3)
  const [typeSort, setTypeSort] = useState('asc')
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    Axios.get('http://localhost:5000/products').then(res => {
      setProducts(res.data)
    })

  }, [])

  function getShownProducts () {
    const final = offset + productPerPage
    const sliced = sortedProducts().slice(offset, final)

    return sliced
  }

  function handleQuantityPerPageChange (value) {
    setProductPerPage(Number(value))
  }

  function compareAsc(a, b) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name> b.name ){
      return 1;
    }
    return 0;
  }

  function compareDsc(a, b) {
    if ( a.name > b.name ){
      return -1;
    }
    if ( a.name < b.name ){
      return 1;
    }
    return 0;
  }

  function sortedProducts () {
    if (typeSort === 'asc') {
      return products.sort(compareAsc)
    } else {
      return products.sort(compareDsc)
    }
  }

  function handleSortChange (value) {
    setTypeSort(value)
  }
  
  return (
    <Container>
      <FiltersContainer>
        <SearchContainer>
          <SearchBarButton>
            <FontAwesomeIcon icon={faSearch}/>
          </SearchBarButton>
          <input type="text" placeholder="Pesquisar" />
        </SearchContainer>
        <SelectContainer>
          <label>Ordenar por:</label>
          <Select onChange={(e) =>handleSortChange(e.target.value)}>
            <option value="asc">Nome (A-Z)</option>
            <option value="dsc">Nome (Z-A)</option>
          </Select>
        </SelectContainer>
        <SelectContainer>
          <label>Exibição:</label>
          <Select onChange={(e) => handleQuantityPerPageChange(e.target.value)}>
            <option value="3">3</option>
            <option value="10">10</option>
          </Select>
        </SelectContainer>
      </FiltersContainer>
      {
        getShownProducts().map(product => <ProductCard productData={product} />)
      }
      {
        products.length && (
          <Pagination 
            limit={productPerPage} 
            total={products.length} 
            offset={offset}
            setOffset={setOffset} 
          />
        )
      }
    </Container>
  )
}

export default Products