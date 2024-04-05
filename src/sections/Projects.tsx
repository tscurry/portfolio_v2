import { motion } from 'framer-motion';
import fadeInUpVariants from '../utils/fadeInUpAnimation';

const Projects = () => {
  return (
    <motion.div
      className="section-container"
      initial="hidden"
      id="projects"
      whileInView="animate"
      variants={fadeInUpVariants}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
        Projects<span className="dot">.</span>
      </h2>

      <div className="divider"></div>
    </motion.div>
  );
};

export default Projects;
