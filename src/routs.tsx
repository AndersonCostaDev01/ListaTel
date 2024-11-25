import Home from './pages/Home'
import Inicio from './pages/Inicioi'
import Error from './pages/Error/inde'
import Teste from './components/Teste'
import Lista from './pages/Lista'
import Cadastro from './pages/Cadastro'
import { createBrowserRouter } from 'react-router-dom'

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
export default router
