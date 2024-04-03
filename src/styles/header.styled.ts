import styled from 'styled-components';

interface WrapperProps {
  $isHidden: boolean;
  $atTop: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: transparent;

  position: fixed;
  top: ${(props) => (props.$isHidden ? '-100%' : 0)};
  left: 0;
  right: 0;

  box-shadow: ${(props) => (props.$atTop ? '' : '0 2px 4px rgba(0,0,0, 0.3)')};
  transition: top 0.4s;
  z-index: 2;
`;

export const LogoContainter = styled.div`
  cursor: pointer;
  width: 50px;
`;

export const HeadingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (${(props) => props.theme.breakpoints.tabletLg}) {
    display: none;
  }
`;
