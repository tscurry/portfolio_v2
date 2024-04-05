import { motion } from 'framer-motion';
import { Grouped, ListItems, TechnologiesInnerContainer } from '../styles/About.styled';
import fadeInUpVariants from '../utils/fadeInUpAnimation';
import technologies from '../utils/technologies';

const About = () => {
  return (
    <motion.div
      className="section-container"
      id="about"
      initial="hidden"
      variants={fadeInUpVariants}
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className="section-title">
        About me<span className="dot">.</span>
      </h2>

      <div className="divider"></div>

      <p>
        My journey began with a fascination for how design and code intertwine to shape our
        interactions with technology. Since then, I've devoted myself to mastering HTML, CSS, and
        JavaScript. With each project, I strive to be better than I was previously, extending on
        design principles and concepts I previously learned to apply them to future projects.
      </p>
      <p>
        Recently, I've ventured into the world of mobile front-end development, exploring
        technologies like React Native to craft visually stunning yet highly intuitive mobile
        interfaces. I'm driven by the challenge of creating engaging experiences that feel natural
        with every tap and swipe. While still early in my professional path, I've already tackled
        solo projects &#8211; from responsive portfolios to interactive app prototypes &#8211; using
        each endeavor as an opportunity to refine my skills and grow as a developer.
      </p>
      <p>Some technologies and frameworks I've worked with:</p>

      <Grouped>
        <TechnologiesInnerContainer>
          {technologies.map((name: string, idx) => (
            <ListItems key={idx}>{name}</ListItems>
          ))}
        </TechnologiesInnerContainer>
      </Grouped>
    </motion.div>
  );
};

export default About;
