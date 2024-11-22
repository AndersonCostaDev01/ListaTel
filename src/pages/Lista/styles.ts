import styled from 'styled-components'

export const container = styled.div`
  margin-left: 25px;
  overflow-x: hidden;
`

export const card = styled.div`
  border-radius: 15px;
  padding: 25px;
  border: 1px solid #1b1b1b;
  margin-top: 25px;

  p {
    color: #466067;
    font-size: 25px;
  }

  button {
    margin-top: 5px;
    width: 70px;
    height: 35px;
    border-radius: 15px;
    border: none;
    background-color: #466067;
    color: #c4c8c5;
    margin-right: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
      transition: 0.5s;
    }
  }
`
export const form = styled.div`
  border-radius: 15px;
  padding: 25px;
  border: 1px solid #1b1b1b;
  margin-top: 25px;

  h2 {
    color: #466067;
    font-size: 25px;
    margin-bottom: 15px;
    font-weight: bold;
  }
  label {
    color: #466067;
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: bold;
  }
  input {
    border: none;
    border-bottom: 1px solid #1b1b1b;
    padding: 5px;
    margin-bottom: 5px;
    font-size: 20px;
    background-color: #c4c8c5;
  }

  button {
    margin-top: 5px;
    width: 70px;
    height: 35px;
    border-radius: 15px;
    border: none;
    background-color: #466067;
    color: #c4c8c5;
    margin-right: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
      transition: 0.5s;
    }
  }
`
