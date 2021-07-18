import { GlobalStyles, Container } from './styles/globalStyles'
import Header from './components/Header/Header'
import Products from './pages/Products/Products'
import CartProvider from './context/Cart'
import UserProvider from './context/User'
import SideMenu from './components/SideMenu/SideMenu'

function App() {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <GlobalStyles />
          <Header />
          <Container>
            <SideMenu />
            <Products />
          </Container>
        </CartProvider>
      </UserProvider>
    </div>
  )
}

export default App;
