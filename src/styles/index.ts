import styled from "styled-components";

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.content};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.text};
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
