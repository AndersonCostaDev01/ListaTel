import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTelefone, editaTelefone } from '../../store/reduces/telefones'
import * as S from './styles'

export default function Lista() {
  const telefones = useSelector((state: RootState) => state.telefone.payload)
  const dispatch = useDispatch()

  const [numero, setNumero] = useState<number>(0)
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [editando, setEditando] = useState<number | null>(null) // ID do telefone em edição

  // Iniciar edição
  function iniciarEdicao(telefoneId: number) {
    const telefone = telefones.find((item) => item.id === telefoneId)
    if (telefone) {
      setNumero(telefone.numero)
      setNome(telefone.nome)
      setEmail(telefone.email)
      setEditando(telefone.id) // Define o ID do telefone sendo editado
    }
  }

  // Salvar alterações
  function salvarEdicao() {
    if (editando !== null) {
      dispatch(
        editaTelefone({
          id: editando,
          numero,
          nome,
          email
        })
      )
      setEditando(null) // Finaliza a edição
      limparFormulario() // Reseta os campos
    }
  }

  // Cancelar edição
  function cancelarEdicao() {
    setEditando(null)
    limparFormulario()
  }

  // Limpar formulário
  function limparFormulario() {
    setNumero(0)
    setNome('')
    setEmail('')
  }

  return (
    <S.container>
      <h1>Lista de Telefones</h1>
      {/* Formulário de Edição */}
      {editando !== null && (
        <S.form>
          <h2>Editando Telefone</h2>
          <div style={{ marginBottom: '10px' }}>
            <label>
              <strong>Número:</strong>
              <input
                type="numer"
                placeholder="Número"
                value={numero}
                onChange={(e) => setNumero(e.target.valueAsNumber)}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              <strong>Nome:</strong>
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              <strong>Email:</strong>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <button onClick={salvarEdicao}>Salvar</button>
          <button onClick={cancelarEdicao} style={{ marginLeft: '10px' }}>
            Cancelar
          </button>
        </S.form>
      )}
      {/* Lista de Telefones */}

      {telefones.map((item) => (
        <S.card key={item.id} style={{ marginBottom: '10px' }}>
          <p>
            <strong>Número:</strong> {item.numero}
          </p>
          <p>
            <strong>Nome:</strong> {item.nome}
          </p>
          <p>
            <strong>Email:</strong> {item.email}
          </p>
          <button onClick={() => iniciarEdicao(item.id)}>Editar</button>
          <button onClick={() => dispatch(removeTelefone(item.id))}>
            Remover
          </button>
          <hr />
        </S.card>
      ))}
    </S.container>
  )
}
