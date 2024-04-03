import * as React from 'react';
import AnimatedLoaderSvg from './svg/AnimatedLoaderSvg';
import { LoaderContainer, Wrapper } from '../styles/loader.styled';
import { AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsMounted(false);
    }, 1400);
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {isMounted && (
          <LoaderContainer>
            <AnimatedLoaderSvg onAnimationComplete={handleAnimationComplete} />
          </LoaderContainer>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Loader;
