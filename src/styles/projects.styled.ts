import styled from 'styled-components';

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  transition: color 0.7s;

  @media (${(props) => props.theme.breakpoints.mobileMd}) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  background-color: ${(props) => props.theme.colors.primary};
  height: auto;
  border-radius: 7px;
  margin-bottom: 30px;
  -webkit-box-shadow: 1px 0px 14px 2px ${(props) => props.theme.colors.bgRgba};
  -moz-box-shadow: 1px 0px 14px 2px ${(props) => props.theme.colors.bgRgba};
  box-shadow: 1px 0px 14px 2px ${(props) => props.theme.colors.bgRgba};
  transform: scaleX(100%);
  transition: transform 0.7s;

  @media (${(props) => props.theme.breakpoints.tabletLg}) {
    width: 100%;
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
`;

export const TechContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  margin: 20px 0;
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
  padding-bottom: 10px;

  @media (${(props) => props.theme.breakpoints.mobileMd}) {
    font-size: 15px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 7px;

  @media (${(props) => props.theme.breakpoints.tabletLg}) {
    height: 300px;
  }

  @media (${(props) => props.theme.breakpoints.tablet}) {
    height: 200px;
  }

  @media (${(props) => props.theme.breakpoints.mobileMd}) {
    height: 150px;
  }
`;
