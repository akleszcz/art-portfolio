import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e6e4e4;
  min-height: 100vh;
  padding: 50px;
`;

export const Content = styled.div`
  background-color: #c7c6c6;
  color: #fff;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 5fr;
  grid-template-areas:
    "navbar navbar"
    "sidemenu main";
  padding: 30px;

  & * {
    padding: 15px;
  }
`;
