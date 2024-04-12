import { motion } from 'framer-motion';
import { Text, Wrapper } from '../styles/footer.styled';

const Footer = () => {
  return (
    <Wrapper>
      <motion.div>
        <Text>Built & Designed by Timmy Scurry</Text>
        <Text>&copy; 2024</Text>
      </motion.div>
    </Wrapper>
  );
};

export default Footer;
