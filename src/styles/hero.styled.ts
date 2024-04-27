import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;

  @media (${(props) => props.theme.breakpoints.tablet}) {
    align-items: start;
  }
`;

export const SocialsText = styled.p`
  color: ${(props) => props.theme.colors.accent};
  font-weight: 600;
  font-size: 17px;
  margin-right: 20px;
`;

export const IntroText = styled.p`
  color: ${(props) => props.theme.colors.lightSecondary};
  font-size: 20px;
  font-family: Expletus Sans;
`;
