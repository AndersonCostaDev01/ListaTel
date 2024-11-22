import { configureStore } from '@reduxjs/toolkit'
import addTelefone from './reduces/telefones'

const store = configureStore({
  reducer: {
    telefone: addTelefone
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
