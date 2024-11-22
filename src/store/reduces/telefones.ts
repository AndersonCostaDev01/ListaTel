import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TelefoneState = {
  payload: {
    id: number
    numero: number
    nome: string
    email: string
  }[]
}

const initialState: TelefoneState = {
  payload: [
    {
      id: 1,
      numero: 123456789,
      nome: 'Fulano',
      email: 'fulano@sp.com'
    },
    {
      id: 2,
      numero: 987654321,
      nome: 'Beltrano',
      email: 'beltrano@sp.com'
    },
    {
      id: 3,
      numero: 555555555,
      nome: 'Ciclano',
      email: 'ciclano@sp.com'
    },
    {
      id: 4,
      numero: 111111111,
      nome: 'Siclano',
      email: 'siclano@sp.com'
    },
    {
      id: 5,
      numero: 222222222,
      nome: 'Ticlano',
      email: 'ticlano@sp.com'
    },
    {
      id: 6,
      numero: 333333333,
      nome: 'Qiclano',
      email: 'qiclano@sp.com'
    }
  ]
}

const telefoneSlice = createSlice({
  name: 'telefone',
  initialState,
  reducers: {
    addTelefone(
      state,
      action: PayloadAction<TelefoneState['payload'][number]>
    ) {
      state.payload.push(action.payload)
    },
    removeTelefone(state, action: PayloadAction<number>) {
      state.payload = state.payload.filter((item) => item.id !== action.payload)
    },
    editaTelefone(
      state,
      action: PayloadAction<TelefoneState['payload'][number]>
    ) {
      const index = state.payload.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index !== -1) {
        state.payload[index] = action.payload
      }
    }
  }
})

export const { addTelefone, removeTelefone, editaTelefone } =
  telefoneSlice.actions

export default telefoneSlice.reducer
