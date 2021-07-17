import { GlobalStyles } from './styles/globalStyles'
import Header from './components/Header/Header'
import Products from './pages/Products/Products'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Products />
    </div>
  )
}

export default App;
