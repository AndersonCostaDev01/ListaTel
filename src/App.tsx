import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from './store'

import Home from './pages/Home'
import Inicio from './pages/Inicioi'
import Error from './pages/Error/inde'
import Teste from './components/Teste'
import Lista from './pages/Lista'
import Cadastro from './pages/Cadastro'

import { GlobalStyle, Container } from './styles'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          path: '',
          element: <Inicio />
        },
        {
          path: 'cadastro',
          element: <Cadastro />
        },
        {
          path: 'lista',
          element: <Lista />
        }
      ]
    },
    {
      path: '/teste',
      element: <Teste />
    }
  ])
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  )
}

export default App
