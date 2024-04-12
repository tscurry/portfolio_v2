import { motion } from 'framer-motion';
import { fadeInUpVariants } from '../utils/variantsAnimation';

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className="section-container contact-container"
      initial="hidden"
      whileInView="animate"
      variants={fadeInUpVariants}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
        Get in Touch<span className="dot">.</span>
      </h2>

      <div className="divider"></div>

      <motion.p
        className="contact-text"
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="animate"
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        I'm always open to new opportunities and would love to hear from you. Feel free to reach out
        with any inquiries or project proposals or if you just want to have a chat.
      </motion.p>

      <motion.button
        className="outline-button contact-button"
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <a href="mailto:scurrytimmy@gmail.com">
          <p className="button-text">Send Message</p>
        </a>
      </motion.button>
    </motion.div>
  );
};

export default Contact;
