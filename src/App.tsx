import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './routs'
import store from './store'

import { GlobalStyle, Container } from './styles'

function App() {
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
