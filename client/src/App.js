import { GlobalStyles } from './styles/globalStyles'
import Header from './components/Header/Header'
import Products from './pages/Products/Products'
import CartProvider from './context/Cart'

function App() {
  return (
    <div>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Products />
      </CartProvider>
    </div>
  )
}

export default App;
