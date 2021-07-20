import styled from 'styled-components'

export const Label = styled.label`
  color: #917f8b;
`

export const DataContainer = styled.div`
  width: 60%;
`

export const CartBox = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const CartItems = styled(CartBox)`
  margin-bottom: 25px;

  h4 {
    margin: 10px;
  }
`

export const Price = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin: 0;
`

export const PriceWithTaxes = styled.p`
  font-size: 10px;
  color: #917f8b;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`

export const ClientDetails = styled.div`
  display: flex;
`

export const ClientId = styled.div`
  margin-bottom: 10px;

  p {
    background-color: #301b2c;
    color: #ffffff;
    display: table;
    height: 14px;
    vertical-align: top;
    padding: 3px 10px 3px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    margin: 0;
  }
`

export const PriceContainer = styled.div`
  text-align: end;
` 

export const ClientTitle = styled.div`
  display: flex;
`

export const ClientContent = styled.div`
  
`

export const ClientDetailsButton = styled.button`
  border: none;
  color: #3cba92;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: bold;
`

export const Data = styled.div`
  margin: 10px 100px 10px 0;
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
  }
  
  p {
    margin: 0;
    text-align: center;
    font-weight: bold;
  }
`

export const DataPrices = styled(Data)`
  margin: auto;
  .taxes-label {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

export const TotalSummaryContainer = styled(CartBox)`
  width: 25%;
  height: 100%;
  margin-left: 50px;
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`

export const TotalPrice = styled.div`
  text-align: center;
  margin-bottom: 20px;

  label {
    font-size: 16px;
  }

  p {
    margin: 0;
    font-weight: bold;
  }
`

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;

  h4 {
    margin: 10px 0;
  }
`
