import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    height: 90px;
    justify-content: space-between;
    margin-bottom: 30px;
    border-bottom: 2px solid #3cba92;
    background-color: #ffffff;

    img {
      height: 40px;
      cursor: pointer;
      position: relative;
      top: 25px;
      left: 70px;
    }
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  text-align: center;

  span {
    margin-right: 6px;
  }

  p {
    margin: 0;
  }
`