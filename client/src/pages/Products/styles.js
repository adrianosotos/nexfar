import styled from 'styled-components'

export const Container = styled.div`
  width: 64%;
  height: 92vh;
  border-right: solid 1px #ccc;
  margin: auto;
`

export const FiltersContainer = styled.div`
  display: flex;
  margin: auto;
  max-width: 80%;
  justify-content: space-between;
`

export const SearchContainer = styled.div`
  display: flex;
  svg {
    color: #ffffff;
    background-color: #68007e;
  }

  input {
    border-radius: 20px;
    padding: 0 40px;
    width: 40%;
    border: none;
    height: 30px;
    background-color: #e9d9f2;
    color: #301b2c;
    width: 400px;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #301b2c;
  }
`
export const SearchBarButton = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #5b127d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e8dff3;
  cursor: pointer;
  position: relative;
  left: 34px;
  bottom: 3px;
`

export const SelectContainer = styled.div`
  display:flex;

  label {
    margin: auto 10px;
    font-size: 13px;
  }
`

export const Select = styled.select`
  border-radius: 20px;
  padding: 0 10px;
  background-color: #ffffff;

  &:focus {
    outline: none;
  }
`
