import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  width: 100%;
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

export const ContactContainer = styled.button`
  border-radius: 6px;
  padding: 0 20px;
  width: 120px;
  background-color: transparent;
  transition: background-color 0.4s ease;
  border: 1px solid ${(props) => props.theme.colors.accent};
  cursor: pointer;
  margin-left: 50px;

  &:hover {
    background-color: rgba(${(props) => props.theme.colors.accentRgba}, 0.2);
  }

  @media (${(props) => props.theme.breakpoints.tablet}) {
    width: 150px;
    margin-top: 40px;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;
