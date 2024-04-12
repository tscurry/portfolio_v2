import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header, Loader, Footer } from './components/index';
import { Hero, About, Projects, Contact } from './sections/index';

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
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
