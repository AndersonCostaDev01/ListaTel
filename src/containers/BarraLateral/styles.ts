import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #466067;
  height: 100%;
  border-radius: 15px;
`
export const Titulo = styled.h1`
  color: #c4c8c5;
  background-color: transparent;
  margin-top: 25px;
`
export const Ul = styled.ul`
  list-style: none;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Li = styled.li`
  margin-bottom: 25px;
  text-align: center;
  background-color: #c4c8c5;
  padding: 25px;
  border-radius: 25px;
  width: 100px;
  transition: all 0.4s ease-in-out;

  &:hover {
    padding: 35px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;

    &:hover {
      padding: 25px;
    }
  }
`
export const Item = styled(NavLink)`
  color: #466067;
  margin-top: 25px;
  text-decoration: none;
  font-weight: bold;
  padding: 20px;
`
export const Menu = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 55px;
    color: #c4c8c5;
  }
`
export const Open = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`
