import * as S from './styles'

export default function BarraLateral() {
  return (
    <S.Container>
      <S.Titulo>Barra lateral</S.Titulo>
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
    </S.Container>
  )
}
