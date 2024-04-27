import styled from 'styled-components';

export const AboutHeading = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  margin: 0;
  font-size: 35px;
`;

export const Grouped = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 7px;
  padding: 2px 15px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  width: 55%;

  @media (${(props) => props.theme.breakpoints.desktop2Md}) {
    width: 75%;
  }

  @media (${(props) => props.theme.breakpoints.desktopSm}) {
    width: auto;
  }
`;

export const TechnologiesInnerContainer = styled.ol`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  padding-inline-start: 20px;

  @media (${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (${(props) => props.theme.breakpoints.mobileMd}) {
    column-gap: 1rem;
    padding-inline-start: 10px;
  }
`;

export const ListItems = styled.li`
  color: ${(props) => props.theme.colors.lightSecondary};
  font-size: 14px;
  list-style-type: '\u002a';
  font-family: Montserrat;
  line-height: 2.2;
  padding-left: 6px;
`;
