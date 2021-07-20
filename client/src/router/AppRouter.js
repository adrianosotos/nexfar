import Products from '../pages/Products/Products'
import Cart from '../pages/Cart/Cart'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import { Container } from '../styles/globalStyles'
import SideMenu from '../components/SideMenu/SideMenu'

function AppRouter () {
  return (
    <Router>
      <Header />
      <Container>
            <SideMenu />
            <Switch>
              <Route
                path="/"
                exact
                component={Products}
              />
              <Route 
                path='/carrinho' 
                exact 
                component={Cart}
              />
             </Switch>
          </Container>
    </Router>
  )
}

export default AppRouter
