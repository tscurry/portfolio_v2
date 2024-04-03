import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header, Loader } from './components/index';
import { Hero } from './sections/index';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Hero />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
