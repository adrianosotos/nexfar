import { HeaderContainer } from './style'
import logo from '../../assets/Nexfar.png'

function Header () {
    return (
      <HeaderContainer>
        {/* <Link to="/"> */}
          <img src={logo} />
        {/* </Link> */}
      </HeaderContainer>
    )
}

export default Header