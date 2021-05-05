import styled from "styled-components";
import Header from "../Header/Header";

const AppWindow = ({ children }) => {
  return (
    <StyledWindow>
      <Header />
      {children}
    </StyledWindow>
  );
};

export default AppWindow;

const StyledWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin-left: 90px;
  @media (max-width: 1000px) {
    margin-left: 0px;
  }

  padding: 0em 1.5em;
`;
