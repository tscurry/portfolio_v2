import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${theme}

  :root {
    font-family: Expletus Sans, sans-serif; 
    box-sizing: border-box;
    scroll-behavior: smooth;
    background-color: ${theme.colors.bg};
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-x: hidden;
  }

  li:hover {
    color: ${theme.colors.accent};
    transition: color 0.5s ease;
  }

  ul {
    display: flex;
    gap: 40px;
    cursor: pointer;

    @media(${theme.breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  li {      
    list-style: square;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.secondary};
    line-height: 1.1;

    @media(${theme.breakpoints.tablet}) {
      font-size: 1.3rem;
    }

    @media(${theme.breakpoints.mobileSm}) {
      font-size: 1rem;
    }
  }


  .button-text {
    color: ${theme.colors.secondary};
    font-size: 12px;
    font-family: Expletus Sans;

    @media(${theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
    @media(${theme.breakpoints.mobileSm}) {
      font-size: 14px;
    }
  }

  .svg-button {
    display: none;
    z-index: 999;

    @media(${theme.breakpoints.tablet}) {
      display: block;
      outline: none;
      border: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 15px;
      width: 50px;
      height: 50px;
      background: transparent;
    }
  }

  .background {
    display: none;

    @media(${theme.breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      background: ${theme.colors.hamBg};
      box-shadow: -10px 0px 30px -15px ${theme.colors.bgRgba};
    }
  }

  nav {
    display: none;
    
    @media (${theme.breakpoints.tablet}) {
      display: block;
      margin: 0 auto;
      position: absolute;
      top: 0;
      right: 0;
      width: 65vw;
      height: 100vh;
    }
  }
`;
