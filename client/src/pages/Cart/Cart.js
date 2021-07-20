import { useState } from 'react'
import { CartHeader, CheckoutButton, Container, ClearCartButton, StyledLink, Tabs, CartInfoContainer } from '../Cart/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import CartSummary from '../../components/CartSummary/CartSummary'
import { useCartHandler } from '../../hooks/useCartHandler'

function Cart () {
  const [activeTab, setActiveTab] = useState('summary')
  const { emptyCart } = useCartHandler()

  function switchTabs () {
    if (activeTab === 'summary') {
      return <CartSummary />
    } else if (activeTab === 'products') {
      //to be implemented
      return 
    } else {
      //to be implemented
      return
    }
  }

  return (
    <Container>
      <CartHeader>
        <StyledLink to="/">
          <p><span><FontAwesomeIcon icon={faArrowLeft} size="lg"/></span> VOLTAR</p>
        </StyledLink>
        <CheckoutButton>IR PARA PAGAMENTO <FontAwesomeIcon icon={faArrowRight} size="lg"/></CheckoutButton>
        <ClearCartButton onClick={emptyCart}>LIMPAR CARRINHO<span><FontAwesomeIcon icon={faTrash} /></span></ClearCartButton>
      </CartHeader>
      <Tabs>
        <p 
          onClick={() => setActiveTab('summary')} 
          className={activeTab === 'summary' && 'active'} 
        >RESUMO</p>
        <p 
          onClick={() => setActiveTab('products')} 
          className={activeTab === 'products' && 'active'}
        >PRODUTOS</p>
        <p 
          onClick={() => setActiveTab('additionalInfo')} 
          className={activeTab === 'additionalInfo' && 'active'}
        >INFORMAÇÕES ADICIONAIS</p>
      </Tabs>
      <CartInfoContainer>
        {switchTabs()}
      </CartInfoContainer>
    </Container>
  )
}

export default Cart
