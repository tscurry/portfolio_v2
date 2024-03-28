import { motion, useCycle } from 'framer-motion';
import {
  HeadingsContainer,
  LogoContainter,
  Wrapper,
  ContactContainer,
  SectionWrapper,
} from '../styles/header.styled';
import { MenuSvg, LogoSvg } from './index';
import { navLinks } from '../links';

const sidebar = {
  open: {
    width: '100%',
    transition: {
      type: 'tween',
      stiffness: 400,
      restDelta: 2,
    },
  },
  closed: {
    width: 0,
    transition: {
      delay: 0.1,
      type: 'tween',
      // damping: 400,
    },
  },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Wrapper>
      <HeadingsContainer>
        <LogoContainter onClick={() => window.location.reload()}>
          <LogoSvg />
        </LogoContainter>

        <SectionWrapper>
          {navLinks && (
            <ul>
              {navLinks.map((link: { name: string; url: string }, idx) => (
                <li key={idx}>{link.name}</li>
              ))}
            </ul>
          )}
          <ContactContainer>
            <p className="button-text">Contact Me</p>
          </ContactContainer>
        </SectionWrapper>

        <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
          <MenuSvg toggle={() => toggleOpen()} />
          <motion.div className="background" variants={sidebar}>
            {isOpen && (
              <>
                {navLinks && (
                  <ul>
                    {navLinks.map((link: { name: string; url: string }, idx) => (
                      <li key={idx}>{link.name}</li>
                    ))}
                  </ul>
                )}

                <ContactContainer>
                  <p className="button-text">Contact Me</p>
                </ContactContainer>
              </>
            )}
          </motion.div>
        </motion.nav>
      </HeadingsContainer>
    </Wrapper>
  );
};

export default Header;
