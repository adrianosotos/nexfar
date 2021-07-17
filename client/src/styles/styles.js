import styled from 'styled-components'

export const Card = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  margin: 30px auto;
  padding: 12px 40px;
  width: 35%;

  .product-title {
    display: flex;
    justify-content: space-between;

    .sku-tag {
      background-color: #301b2c;
      color: #ffffff;
      display: table;
      height: 14px;
      vertical-align: top;
      padding: 3px 10px 3px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    h2 {
      color: #301b2c;
      margin: 0px 10px 12px 0px;
      font-size: 18px;
      width: 70%;
    }
  }

  .product-details {
    display: flex;
    margin: 40px 40px;
    justify-content: space-between;

    .product-info {
      width: 80%;
    }

    table {
      width: 90%;
    }

    thead {
      margin-bottom: 20px;
    }

    th, td {
      text-align: center;
      height: 50px;
    }
  }
`

export const ButtonsContainer = styled.div`
  svg {
    cursor: pointer;
    margin: 0 10px;
  }
`

export const Input = styled.div`
  display: flex;
  justify-content: center;

  span {
    border-bottom: 1px solid #000000;
    margin: 0px 10px;
  }

  .add {
    width: 12px;
    height: 12px;
    border: solid 2px #3cba92;
    border-radius: 50px;
    padding: 2px;
    color: #3cba92;
    cursor: pointer;
  }

  .minus {
    width: 12px;
    height: 12px;
    border: solid 2px #f62854;
    border-radius: 50px;
    padding: 2px;
    color: #f62854;
    cursor: pointer;
  }

  .disabled {
    color: #ccc;
    border-color: #ccc;
    cursor: pointer;
    width: 12px;
    height: 12px;
    border: solid 2px #ccc;
    border-radius: 50px;
    padding: 2px;
  }
`

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
      height: 80px;
      margin: 19px 50px;
      width: 80px;
  }
`

export const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  .prices {
    display: flex;
    flex-direction: column;

    span {
      font-weight: bold;
    }
  }

  .bin {
    color: #f62854;
    cursor: pointer;
    margin: auto;
  }
`

export const NoStockLabel = styled.div`
  display: flex;
  position: absolute;
  padding: 0px 20px;

  .labels {
    position: relative;
    bottom: 4px;
    margin: 0 6px;

    p {
      margin: 0;
      font-size: 10px;
    }

    button {
      border-radius: 10px;
      border: 0;
      cursor: pointer;
    }
  }
`
export const InStockLabel = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
  bottom: 10px;
  padding: 0px 30px;

  p {
    margin-left: 10px;
  }
`

export const Tags = styled.div`
  display: flex;
  border-top: 1px solid #000000;
  width: 70%;
  margin: 0 0 0 200px;

  p {
    background-color: #ebebff;
    width: fit-content;
    margin: 10px 10px;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
  }
`
export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
`

export const PaginationButton = styled.li`
    margin-left: 2px;

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    .active {
      text-decoration: none;
      font-weight: bold;
      background-color: #3cba92;
      color: #ffffff;
      border-radius: 20px;
      height: 20px;
      width: 20px;
    }
`

export const PaginationArrow = styled.li`
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`
