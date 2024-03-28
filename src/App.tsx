import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/index';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Loader /> */}
      <Header />
    </ThemeProvider>
  );
};

export default App;
