import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTelefone } from '../../store/reduces/telefones'
import * as S from './styles'

export default function Cadastro() {
  const dispatch = useDispatch()

  // Estados para armazenar os valores dos inputs
  const [numero, setNumero] = useState(0)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  // Função para lidar com o envio do formulário
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    // Validação simples
    if (!numero || !nome || !email) {
      alert('Todos os campos são obrigatórios!')
      return
    }

    // Cria o objeto do novo telefone
    const novoTelefone = {
      id: Date.now(),
      numero,
      nome,
      email
    }

    // Dispara a ação para adicionar o telefone
    dispatch(addTelefone(novoTelefone))

    // Limpa os campos após o registro
    setNumero(0)
    setNome('')
    setEmail('')

    alert('Número cadastrado com sucesso!')
  }

  return (
    <S.Container>
      <h1>Cadastro de Telefone</h1>
      <form onSubmit={handleSubmit}>
        <S.Form>
          <label htmlFor="numero">Número:</label>
          <input
            type="number"
            id="numero"
            placeholder="(83)99165-1441"
            value={numero}
            onChange={(e) => setNumero(e.target.valueAsNumber)}
          />
        </S.Form>

        <S.Form>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            placeholder="Fulano"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </S.Form>

        <S.Form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="fulano@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.Form>

        <button type="submit">Cadastrar</button>
      </form>
    </S.Container>
  )
}
