import styled from "styled-components";
import Toolbar from "../ToolBar/ToolBar";

const AppMain = ({ children }) => {
  return (
    <StyledMain>
      <Toolbar />
      {children}
    </StyledMain>
  );
};

export default AppMain;

const StyledMain = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 100%;
  background: #202136;
  display: flex;
  align-items: center;

  /* border: 1px solid #373759; */
  border-radius: 24px;

  position: relative;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
