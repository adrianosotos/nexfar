import { HeaderContainer, DataContainer } from './style'
import logo from '../../assets/Nexfar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header () {
    return (
      <HeaderContainer>
        <img src={logo} />
        <DataContainer>
          <p>NEXFAR</p>
          <p>
            <span><FontAwesomeIcon icon={faShoppingCart} /></span>
            R$ 450,00
          </p>
          <p>Pedido mínimo R$ 150,00</p>
        </DataContainer>
      </HeaderContainer>
    )
}

export default Header