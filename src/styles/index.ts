import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.background};
  min-height: 100vh;
  padding: 50px;
`;

export const Content = styled.div`
  background-color: ${props => props.theme.colors.content};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.colors.text};
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 5fr;
  grid-template-areas:
    "navbar navbar"
    "sidemenu main";
  grid-template-rows: 50px 1fr;
  min-height: 100vh;
  padding: 30px;

  & > * {
    padding: 15px;
  }
`;
