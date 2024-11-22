import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;

    ::-webkit-scrollbar {
      display: none;
    }
  }
  body {
    background-color: #c4c8c5;

  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  height: calc(100vh - 40px);
  padding: 20px;
`
