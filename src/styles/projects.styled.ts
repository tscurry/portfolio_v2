import styled from 'styled-components';

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  transition: color 0.7s;

  @media (${(props) => props.theme.breakpoints.mobileMd}) {
    font-size: 20px;
  }
`;

export const SplitProj = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr;

  @media (${(props) => props.theme.breakpoints.desktopMd}) {
    grid-column-gap: 20px;
  }

  @media (${(props) => props.theme.breakpoints.desktopSm}) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 550px;
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 7px;
  -webkit-box-shadow: 1px 0px 14px 2px ${(props) => props.theme.colors.bgRgba};
  -moz-box-shadow: 1px 0px 14px 2px ${(props) => props.theme.colors.bgRgba};
  box-shadow: 1px 0px 14px 2px ${(props) => props.theme.colors.bgRgba};
  transform: scaleX(100%);
  transition: transform 0.7s;

  @media (${(props) => props.theme.breakpoints.desktop2Md}) {
    height: 500px;
  }

  @media (${(props) => props.theme.breakpoints.desktopSm}) {
    margin-bottom: 30px;
    height: auto;
  }

  @media (${(props) => props.theme.breakpoints.desktopXl}) {
    height: auto;
  }

  &:hover {
    transform: scaleX(102%);
    transition: transform 0.7s;
  }

  &:hover ${Title} {
    color: ${(props) => props.theme.colors.accent};
    transition: color 0.7s;
  }
`;

export const ProjectContainer = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const TechContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 20px 0;

  @media (${(props) => props.theme.breakpoints.desktopSm}) {
    position: relative;
  }
`;

export const TechText = styled.p`
  padding: 2px 15px;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  font-size: 12px;
  margin: 0 0 2px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  @media (${(props) => props.theme.breakpoints.mobileMd}) {
    font-size: 15px;
  }

  @media (${(props) => props.theme.breakpoints.desktopXl}) {
    margin-bottom: 50px;
  }
`;

export const Img = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 7px;
`;

export const InProgressText = styled.p`
  font-style: italic;
  color: ${(props) => props.theme.colors.accent};
  margin: 20px 0;
  position: absolute;
  bottom: 0;
`;
