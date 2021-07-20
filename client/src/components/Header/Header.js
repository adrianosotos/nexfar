import { Logo, HeaderContainer, DataContainer, AvatarImage, UserContainer, StyledLink } from './style'
import { useCart } from '../../context/Cart'
import logo from '../../assets/Nexfar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons'
import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom'

function Header () {
    const { formattedTotal } = useCart()
  
    return (
      <HeaderContainer>
        <Link to='/'>
          <Logo src={logo} />
        </Link>
        <StyledLink to="/carrinho" className="c">
          <DataContainer>
            <p className="store">NEXFAR</p>
            <p className="total-price">
              <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                {formattedTotal}
            </p>
            <p className="minimal-purchase-label">Pedido mínimo R$ 150,00</p>
          </DataContainer>
        </StyledLink>
        <UserContainer>
          <FontAwesomeIcon icon={faBell} size="lg"/>
          <AvatarImage src={avatar} />
        </UserContainer>
      </HeaderContainer>
    )
}

export default Header