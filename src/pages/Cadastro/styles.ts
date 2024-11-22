import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 25px;

  h1 {
    color: #466067;
    font-size: 25px;
    text-align: center;
    margin-bottom: 25px;
    padding-bottom: 5px;
    border-bottom: 1px solid #466067;
  }

  label {
    color: #466067;
    font-size: 25px;
    margin-right: 5px;
  }
  button {
    margin-top: 5px;
    width: 200px;
    height: 55px;
    border-radius: 15px;
    border: none;
    background-color: #466067;
    color: #c4c8c5;
    margin-right: 5px;
    cursor: pointer;
    font-size: 20px;
    margin-top: 15px;
  }
`

export const Form = styled.form`
  margin-top: 5px;

  input {
    border: none;
    background-color: #c4c8c5;
    border-bottom: 1px solid #466067;
    font-size: 15px;
    padding: 5px;
  }
`
