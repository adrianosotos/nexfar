import styled from 'styled-components'

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
