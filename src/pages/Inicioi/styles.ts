import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 15px;
  margin-left: 25px;
  background-color: #466067;

  h1 {
    color: #c4c8c5;
    font-size: 50px;
  }

  p {
    color: #c4c8c5;
    font-size: 25px;
    margin-top: 25px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 25px;
    height: 100vw;

    h1 {
      font-size: 35px;
      text-align: center;
    }

    p {
      font-size: 20px;
      text-align: center;
    }
  }
`
