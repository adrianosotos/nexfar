import { GlobalStyles, Container } from './styles/globalStyles'
import Header from './components/Header/Header'
import Products from './pages/Products/Products'
import CartProvider from './context/Cart'
import SideMenu from './components/SideMenu/SideMenu'

function App() {
  return (
    <div>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Container>
          <SideMenu />
          <Products />
        </Container>
      </CartProvider>
    </div>
  )
}

export default App;
