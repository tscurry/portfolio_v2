import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle.styled'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <h1>Vite + React</h1>
    </ThemeProvider>
  )
}

export default App
