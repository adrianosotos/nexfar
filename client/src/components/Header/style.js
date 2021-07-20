import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    border-bottom: 2px solid #3cba92;
    background-color: #ffffff;
`

export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
  position: relative;
  top: 25px;
  left: 70px;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: normal;
  width: 20%;
  text-align: center;
  margin-left: auto;
  width: 230px;

  span {
    margin-right: 6px;
  }

  p {
    margin: 2px 0;
  }

  .store {
    margin-top: 20px;
    font-size: 10px;
  }

  .total-price {
    font-weight: 500;
    color: #3cba92;
  }

  .minimal-purchase-label {
    font-size: 10px;
  }

  a {
    text-decoration: none;
    color: #000000;
    margin-left: auto;
  }
`

export const AvatarImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 29px;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;

  svg {
    position: relative;
    top: 15px;
  }

  img {
    margin: 0 25px;
  }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000000;
    margin-left: auto;
`;
