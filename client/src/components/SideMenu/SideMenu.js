import { Container, StoreData, MenuContainer } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faChevronRight, faFire, faBox, faReceipt, faTicketAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../../context/User'
import { cnpjMask } from '../../utils/utils'
import { Link } from 'react-router-dom'

function SideMenu () {
  const { user } = useUser()
  return (
    <Container>
      <StoreData>
        <FontAwesomeIcon icon={faStore} size="lg"/>
        <div>
          <p>{user?.name}</p>
          <p>{cnpjMask(user?.cnpj)}</p>
        </div>
        <span className="arrow"><FontAwesomeIcon icon={faChevronRight} /></span>
      </StoreData>
      <MenuContainer>
        <h4>COMPRAS</h4>
        <ul>
          <li>
            <span><FontAwesomeIcon icon={faFire} /></span>
            Promoções
          </li>
          <li className="active">
          <Link to="/">
            <span><FontAwesomeIcon icon={faBox} /></span>
              Produtos
          </Link>
          </li>
          <li>
            <span><FontAwesomeIcon icon={faReceipt} /></span>
            Pedidos
          </li>
          <li>
            <span><FontAwesomeIcon icon={faTicketAlt} /></span>
            Cupons
          </li>
        </ul>

        <h4>ADMINISTRATIVO</h4>
        <ul>
          <li>
            <span><FontAwesomeIcon icon={faStore} /></span>
            Estabelecimento
          </li>
        </ul>

        <h4>AJUDA</h4>
        <ul>
          <li>
            <span><FontAwesomeIcon icon={faPhone} /></span>
            Whatsapp
          </li>
          <li>
            <span><FontAwesomeIcon icon={faPhone} /></span>
            Contato Distribuidora
          </li>
        </ul>
      </MenuContainer>
    </Container>
  )
}

export default SideMenu
