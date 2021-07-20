import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
`

export const CartHeader = styled.div`
  display: flex;
  margin: 30px 15px 0 15px;
  justify-content: space-between;
`
export const CheckoutButton = styled.button`
  border-radius: 20px;
  background-color: #3cba92;
  margin-left: auto;
  border: none;
  color: #ffffff;
  font-weight: bold;
  height: 35px;
  padding: 10px;
  cursor: pointer;
`
export const ClearCartButton = styled.button`
  background-color: transparent;
  border: none;
  color: #f62854;
  font-weight: bold;
  height: 35px;
  padding: 10px;
  cursor: pointer;
  margin: 0 30px;

  span {
    margin-left: 5px;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  color: #000000;
`
export const Tabs = styled.div`
  display: flex;
  width: 33%;
  margin: 0 43px;
  justify-content: space-between;
  font-size: 15px;

  p {
    cursor: pointer;
    padding: 10px;
  }

  .active {
    border-bottom: 2px solid #3cba92;
  }
`
export const CartInfoContainer = styled.div`
  margin: 20px 43px;
  display: flex;
  justify-content: space-evenly;
`
