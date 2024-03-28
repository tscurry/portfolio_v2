import styled from 'styled-components';
import { theme } from './theme';

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${theme.colors.bg};
`;

export const LogoContainer = styled.div`
  width: 85px;
  margin: auto;
`;
