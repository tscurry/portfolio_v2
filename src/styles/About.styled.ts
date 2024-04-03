import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  width: 90%;
  margin: 0 auto;
`;

export const AboutHeading = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 30px;
`;
