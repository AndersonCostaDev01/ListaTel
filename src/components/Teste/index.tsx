import { useSelector, useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { RootState } from '../../store'
import {
  addTelefone,
  removeTelefone,
  editaTelefone
} from '../../store/reduces/telefones'

export default function Teste() {
  const telefones = useSelector((state: RootState) => state.telefone.payload)
  const dispatch = useDispatch()

  const [numero, setNumero] = useState<number>(0)
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [editando, setEditando] = useState<number | null>(null) // ID do telefone em edição

  function adicionaOuEditaTelefone(e: FormEvent) {
    e.preventDefault()
    if (!numero || !nome || !email) {
      alert('Por favor, preencha todos os campos!')
      return
    }

    if (editando !== null) {
      // Se está editando, dispara a ação de edição
      dispatch(
        editaTelefone({
          id: editando,
          numero,
          nome,
          email
        })
      )
      setEditando(null) // Reseta o estado de edição
    } else {
      // Se não está editando, adiciona um novo telefone
      dispatch(
        addTelefone({
          id: telefones.length + 1,
          numero,
          nome,
          email
        })
      )
    }

    setNumero(0)
    setNome('')
    setEmail('')
  }

  function iniciarEdicao(telefoneId: number) {
    const telefone = telefones.find((item) => item.id === telefoneId)
    if (telefone) {
      setNumero(telefone.numero)
      setNome(telefone.nome)
      setEmail(telefone.email)
      setEditando(telefone.id) // Define o ID do telefone sendo editado
    }
  }

  return (
    <>
      <div>
        <h2>Telefones</h2>
        {telefones.map((item) => (
          <div key={item.id}>
            <p>Numero: {item.numero}</p>
            <p>Nome: {item.nome}</p>
            <p>Email: {item.email}</p>
            <button onClick={() => iniciarEdicao(item.id)}>Editar</button>
            <button onClick={() => dispatch(removeTelefone(item.id))}>
              Remover
            </button>
            <br />
          </div>
        ))}
      </div>

      <form onSubmit={adicionaOuEditaTelefone}>
        <h2>{editando !== null ? 'Editar Telefone' : 'Adicionar Telefone'}</h2>
        <input
          value={numero}
          type="number"
          placeholder="Numero"
          onChange={(e) => setNumero(e.target.valueAsNumber)}
        />
        <input
          value={nome}
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">
          {editando !== null ? 'Salvar Alterações' : 'Adicionar'}
        </button>
      </form>
    </>
  )
}
