import { Logo, HeaderContainer, DataContainer, AvatarImage, UserContainer } from './style'
import { useCart } from '../../context/Cart'
import logo from '../../assets/Nexfar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons'
import avatar from '../../assets/avatar.png'

function Header () {
    const { formattedTotal } = useCart()
  
    return (
      <HeaderContainer>
        <Logo src={logo} />
        <DataContainer>
          <p className="store">NEXFAR</p>
          <p className="total-price">
            <span><FontAwesomeIcon icon={faShoppingCart} /></span>
              {formattedTotal}
          </p>
          <p className="minimal-purchase-label">Pedido mínimo R$ 150,00</p>
        </DataContainer>
        <UserContainer>
          <FontAwesomeIcon icon={faBell} size="lg"/>
          <AvatarImage src={avatar} />
        </UserContainer>
      </HeaderContainer>
    )
}

export default Header