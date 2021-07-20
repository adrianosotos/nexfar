import { GlobalStyles } from './styles/globalStyles'
import CartProvider from './context/Cart'
import UserProvider from './context/User'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <GlobalStyles />
          <AppRouter />
        </CartProvider>
      </UserProvider>
    </div>
  )
}

export default App;
