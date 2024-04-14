import { HeroContainer, SocialsText, IntroText } from '../styles/hero.styled';
import { GithubSvg, LinkedinSvg } from '../components/svg/index';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <HeroContainer>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 4 * 0.1 + 0.3 }}
      >
        Hi, my name is Timmy
      </motion.h1>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 5 * 0.1 + 0.3 }}
      >
        <IntroText>I build and design mobile applications and websites</IntroText>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 6 * 0.1 + 0.3 }}
        className="grouped-container"
      >
        <SocialsText>Check out my: </SocialsText>
        <GithubSvg onClick={() => window.open('https://github.com/tscurry')} />
        <LinkedinSvg onClick={() => window.open('https://linkedin.com/in/timscurry')} />
      </motion.div>
    </HeroContainer>
  );
};

export default Hero;
