import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.lightSecondary}
  margin: 0;
  opacity: 80%;
`;
