import { useState } from 'react'
import * as S from './styles'

export default function BarraLateral() {
  const [menu, setMenu] = useState(false)

  function abreMenu() {
    setMenu(!menu)
  }

  return (
    <S.Container>
      <S.Titulo>Barra de navegação</S.Titulo>
      <S.Menu onClick={abreMenu}>…</S.Menu>
      <S.Open>
        <S.Ul>
          <S.Li>
            <S.Item to="/">Home</S.Item>
          </S.Li>
          <S.Li>
            <S.Item to="/lista">Lista</S.Item>
          </S.Li>
          <S.Li>
            <S.Item to="/cadastro">Cadastro</S.Item>
          </S.Li>
        </S.Ul>
      </S.Open>
      {menu && (
        <S.Ul>
          <S.Li>
            <S.Item to="/">Home</S.Item>
          </S.Li>
          <S.Li>
            <S.Item to="/lista">Lista</S.Item>
          </S.Li>
          <S.Li>
            <S.Item to="/cadastro">Cadastro</S.Item>
          </S.Li>
        </S.Ul>
      )}
    </S.Container>
  )
}
