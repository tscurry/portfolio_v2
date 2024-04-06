import * as React from 'react';
import { motion, useCycle } from 'framer-motion';
import {
  HeadingsContainer,
  LogoContainter,
  SectionWrapper,
  Wrapper,
} from '../styles/header.styled';
import { MenuSvg, LogoSvg } from './svg/index';
import { navLinks } from '../utils/links';
import { variantsChild, sidebar, variants } from '../utils/variantsAnimation';

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isHidden, setIsHidden] = React.useState(false);
  const [isAtTop, setIsAtTop] = React.useState(true);

  const headerRef = React.useRef<HTMLDivElement>(null);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const prevScrollPosRef = React.useRef<number>(window.scrollY);

  // to hide header when scrolling down and show when scrolling up
  const hideHeaderScroll = () => {
    const headerHeight = headerRef.current?.offsetHeight || 0;
    const currScrollPosition = window.scrollY;
    const isScrollingDown = currScrollPosition > prevScrollPosRef.current;

    if (isScrollingDown && currScrollPosition > headerHeight / 2) setIsHidden(true);
    else if (!isScrollingDown) setIsHidden(false);

    prevScrollPosRef.current = currScrollPosition;
    setIsAtTop(window.scrollY === 0);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', hideHeaderScroll);
    return () => removeEventListener('scroll', hideHeaderScroll);
  }, []);

  // trigger animation & events
  React.useEffect(() => {
    const visibleDiv = document.getElementById('sidebar-container');
    const stretchNav = document.getElementById('stretch-nav');

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (visibleDiv) visibleDiv.style.display = 'flex';
      if (stretchNav) stretchNav.style.cssText = 'width: 100vw; height: 100vh;';
    } else {
      if (visibleDiv && stretchNav) {
        setTimeout(() => {
          visibleDiv.style.display = 'none';
          stretchNav.style.cssText = 'width: 0; height: 0';
          document.body.style.overflow = 'unset';
        }, 700);
      }
    }
  }, [isOpen]);

  return (
    <Wrapper ref={headerRef} $isHidden={isHidden} $atTop={isAtTop}>
      <HeadingsContainer>
        <LogoContainter onClick={() => window.location.reload()}>
          <LogoSvg />
        </LogoContainter>

        <SectionWrapper>
          {navLinks && (
            <ul>
              {navLinks.map((link: { name: string; url: string }, idx) => (
                <motion.li
                  key={idx}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: idx * 0.1 + 0.4 }}
                  className="header-li"
                >
                  {link.name}
                </motion.li>
              ))}
            </ul>
          )}
          <motion.button
            className="outline-button"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 3 * 0.1 + 0.4 }}
          >
            <p className="button-text">Resume</p>
          </motion.button>
        </SectionWrapper>

        <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'} id="stretch-nav">
          <MenuSvg toggle={() => toggleOpen()} />
          <motion.div className="background" variants={sidebar}>
            <motion.div variants={variants} id="sidebar-container" ref={sidebarRef}>
              {navLinks && (
                <ul>
                  {navLinks.map((link: { name: string; url: string }, idx) => (
                    <motion.li
                      key={idx}
                      variants={variantsChild}
                      whileTap={{ scale: 0.95 }}
                      className="header-li"
                    >
                      {link.name}
                    </motion.li>
                  ))}
                </ul>
              )}
              <motion.button className="outline-button" variants={variantsChild}>
                <p className="button-text">Resume</p>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.nav>
      </HeadingsContainer>
    </Wrapper>
  );
};

export default Header;
