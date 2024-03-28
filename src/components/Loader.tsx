// import * as React from 'react';

import { LogoContainer, Wrapper } from '../styles/loader.styled';
import LogoSvg from './LogoSvg';

const Loader = () => {
  // const [isMounted, setIsMounted] = React.useState(true);

  // React.useEffect(() => {
  //   const timeout = setTimeout(() => setIsMounted(false), 3000);
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <Wrapper>
      <LogoContainer>
        <LogoSvg />
      </LogoContainer>
    </Wrapper>
  );
};

export default Loader;
