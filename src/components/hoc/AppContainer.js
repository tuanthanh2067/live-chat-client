import styled from "styled-components";

const AppContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default AppContainer;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;

  background: #171726;
  display: flex;
  align-items: center;
  justify-content: center;
`;
