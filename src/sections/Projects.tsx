import { motion } from 'framer-motion';
import { fadeInUpVariants } from '../utils/variantsAnimation';
import {
  HeadingContainer,
  IconsContainer,
  ProjectContainer,
  TechContainer,
  TechText,
  Title,
  Description,
  Wrapper,
  Img,
} from '../styles/projects.styled';
import projectDetails from '../utils/projects';
import { GithubSvg, LinkSvg } from '../components/svg';

interface IProjDetails {
  name: string;
  url: string;
  githubRepo: string;
  img: string;
  technologies: string[];
  description: string;
  alt: string;
}
[];

const Projects = () => {
  return (
    <div className="section-container" id="projects">
      <motion.div
        initial="hidden"
        whileInView="animate"
        variants={fadeInUpVariants}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Projects<span className="dot">.</span>
        </h2>

        <div className="divider"></div>
      </motion.div>

      {projectDetails.map((proj: IProjDetails, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Wrapper>
            <ProjectContainer>
              <HeadingContainer>
                <Title>{proj.name}</Title>
                <IconsContainer>
                  <GithubSvg onClick={() => window.open(proj.githubRepo)} />
                  <LinkSvg onClick={() => window.open(proj.url)} />
                </IconsContainer>
              </HeadingContainer>
              {proj.img ? <Img src={proj.img} alt={proj.alt} /> : null}
              <Description>{proj.description}</Description>
              <TechContainer>
                {proj.technologies.map((name, idx) => (
                  <TechText key={idx}>{name}</TechText>
                ))}
              </TechContainer>
            </ProjectContainer>
          </Wrapper>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
