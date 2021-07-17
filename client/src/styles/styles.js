import styled from 'styled-components'

export const Card = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  margin: 30px auto;
  padding: 12px 40px;
  width: 50%;

  .product-title {
    display: flex;
    justify-content: end;

    div {
      background-color: #301b2c;
      color: #ffffff;
      display: table;
      height: 18px;
      vertical-align: top;
      padding: 3px 10px 3px;
      border-radius: 20px;
    }

    h2 {
      color: #301b2c;
      margin: 0px 10px 12px 70px;
    }
  }

  .product-details {
    display: flex;
    margin: 40px 40px;
    justify-content: space-between;

    .prices {
      display: flex;
      flex-direction: column;
    }
    
    .product-info {
      width: 80%;
    }

    table {
      width: 90%;
    }

    thead {
      margin-bottom: 20px;
    }

    img {
      height: 100px;
      width: 100px;
    }

    th, td {
      text-align: center;
      height: 50px;
    }
  }
`