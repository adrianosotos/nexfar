import { 
  DataContainer,
  CartItems,
  PriceContainer,
  Item,
  CartBox,
  ClientContent,
  Data,
  TotalSummaryContainer,
  TotalPrice,
  Title,
  Price,
  PriceWithTaxes,
  ClientDetailsButton,
  ClientId,
  Label,
  ClientDetails,
  Prices,
  DataPrices 
} from './style'
import { useCart } from '../../context/Cart'
import { useUser } from '../../context/User'
import { brazilianRealMask, cnpjMask } from '../../utils/utils'

function CartSummary () {
  const { cartItems, formattedTotalDiscounts, formattedTotal, formattedFinalPrice } = useCart()
  const { user } = useUser()
  
  return (
    <>
      <DataContainer>
        <CartItems>
          <Title>
            <h4>PRODUTOS</h4>
          </Title>
          {
            cartItems.map(item => (
              <Item>
                <p>{item?.name}</p>
                <PriceContainer>
                  <Price>{item?.quantity} un - {brazilianRealMask(item?.price)}</Price>
                  <PriceWithTaxes>Impostos: {brazilianRealMask(item?.taxes)} Total: {brazilianRealMask(item?.finalPrice)}</PriceWithTaxes>
                </PriceContainer>
              </Item>
            ))
          }

        </CartItems>
        <CartBox>
          <Title>
            <h4>CLIENTE</h4>
            <ClientDetailsButton>VER DETALHES</ClientDetailsButton>
          </Title>
          <ClientContent>
            <ClientId>
              <Label>ID</Label>
              <p>{user?.id}</p>
            </ClientId>
            <ClientDetails>
              <Data>
                <Label>Razão Social</Label>
                <p>{user?.razaoSocial}</p>
              </Data>
              <Data>
                <Label>CNPJ</Label>
                <p>{cnpjMask(user?.cnpj)}</p>
              </Data> 
            </ClientDetails>
          </ClientContent>
        </CartBox>
      </DataContainer>
      <TotalSummaryContainer>
        <Title>
          <h4>VALORES</h4>
        </Title>
        <Prices>
          <DataPrices>
            <Label className="taxes-label">Total <span>(sem impostos)</span></Label>
            <p>{formattedTotal}</p>
          </DataPrices>
          <DataPrices>
            <Label>Impostos</Label>
            <p>{formattedTotalDiscounts}</p>
          </DataPrices>
        </Prices>
        <TotalPrice>
          <Label>Total:</Label>
          <p>{formattedFinalPrice}</p>
        </TotalPrice>
      </TotalSummaryContainer>
    </>
  )
}

export default CartSummary
