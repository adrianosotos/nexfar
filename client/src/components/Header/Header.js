import { HeaderContainer, DataContainer } from './style'
import { useCart } from '../../context/Cart'
import logo from '../../assets/Nexfar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header () {
    const { formattedTotal } = useCart()
  
    return (
      <HeaderContainer>
        <img src={logo} />
        <DataContainer>
          <p>NEXFAR</p>
          <p>
            <span><FontAwesomeIcon icon={faShoppingCart} /></span>
              {formattedTotal}
          </p>
          <p>Pedido mínimo R$ 150,00</p>
        </DataContainer>
      </HeaderContainer>
    )
}

export default Header