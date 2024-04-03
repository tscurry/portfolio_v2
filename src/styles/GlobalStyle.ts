import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${theme}

  :root {
    height: 500%;
  }

  body {
    font-family: Expletus Sans, sans-serif; 
    box-sizing: border-box;
    scroll-behavior: smooth;
    background-color: ${theme.colors.bg};
    margin: 0;
    padding: 0;
    max-width: 100%;
    height: 100%;
  }

  a {
    text-decoration:  none;
  }

  h1{
    color: ${theme.colors.secondary};
    font-size: 60px;
    margin: 10px 0;

    @media(${theme.breakpoints.tabletXl}) {
      font-size: 50px;
    }

    @media(${theme.breakpoints.tablet}) {
      font-size: 38px;
    }
  }

  li:hover {
    color: ${theme.colors.accent};
    transition: color 0.5s;
  }

  .icons {
    fill: ${theme.colors.secondary};
    cursor: pointer;
    transform: translate(0,0);
    z-index: 1;
    transition: transform 0.7s;
  }

  .icons:hover {
    fill: ${theme.colors.accent};
    transform: translate(0, -4px);
    transition: transform 0.7s, fill 0.3s;
  }

 ul{
    display: flex;
    padding: 0;
    gap: 40px;
    cursor: pointer;

    @media(${theme.breakpoints.tabletLg}) {
      flex-direction: column;    
    }
  }

  li {      
    list-style: square;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.secondary};
    line-height: 1.1;
    transition: color 0.5s;

    @media(${theme.breakpoints.tabletLg}) {
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

    @media(${theme.breakpoints.tabletLg}) {
      font-size: 1rem;
    }
    @media(${theme.breakpoints.mobileSm}) {
      font-size: 12px;
    }
  }
  
  .contact-button {
    border-radius: 7px;
    padding: 0px;
    width: 120px;
    background-color: transparent;
    transition: background-color 0.4s ease;
    border: 1px solid ${theme.colors.accent};
    cursor: pointer;
    margin-left: 50px;
  
    &:hover {
      background-color: rgba(${theme.colors.accentRgba}, 0.2);
    }
  
    @media (${theme.breakpoints.tabletLg}) {
      width: 150px;
      margin: 40px auto 0;
    }
  
    @media (${theme.breakpoints.mobileSm}) {
      width: 100px;
    }
  }

  .svg-button {
    display: none;
    z-index: 12;

    @media(${theme.breakpoints.tabletLg}) {
      display: block;
      outline: none;
      border: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      cursor: pointer;
      position: fixed;
      top: 20px;
      right: 15px;
      width: 50px;
      height: 50px;
      background: transparent;
    }
  }
  #sidebar-container {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.hamBg};
    box-shadow: -10px 0px 30px -15px ${theme.colors.bgRgba};
  }

  nav {
    display: none;

    @media(${theme.breakpoints.tabletLg}) {
      background: transparent;
      display: block;
      margin: 0 auto;
      position: absolute;
      background-color: ${theme.colors.bgRgba};
      top: 0;
      height: 100vh;
      right: 0;
    }
  }

  .grouped-container {
    background-color: ${theme.colors.primary};
    border-radius: 7px;
    padding: 2px 15px;
    width: max-content;
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
`;