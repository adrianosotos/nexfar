import styled from 'styled-components'

export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  position: relative;
  left: 25px;
`

export const PaginationButton = styled.li`
    margin: 0 8px;

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