import styled from 'styled-components'

export const Container = styled.div`
  min-width: 300px;
  height: 100vh;
  background-color: #fff;
  padding: 18px;
`

export const StoreData = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  svg {
    position: relative;
    top: 25px;
    margin-right: 15px;
  }

  .arrow {
    position: relative;
    top: 7px;
    left: 28px;
  }
`

export const MenuContainer = styled.div`
  margin: 20px;
  h4 {
    font-weight: bold;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    padding: 10px;
    cursor: pointer;
    color: #b8b8b8;
    font-weight: 800;
    width: 120%;
    border-radius: 19px;
  }

  svg {
    margin-right: 20px;
    color: #b8b8b8;
  }

  .active {
    color: red;
    background-color: #ebebff;
    color: #3cba92;

    svg {
      color: #3cba92;
    }
  }
`
