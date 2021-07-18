import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
 
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: #ebebff;
  }

  html, body {
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`
