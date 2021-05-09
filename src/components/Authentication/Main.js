import styled from "styled-components";

import LeftBox from "./LeftBox";

export default function Main({ component: Component }) {
  return (
    <StyledAuth>
      <StyledContainer>
        <LeftBox />

        <Component />
      </StyledContainer>
    </StyledAuth>
  );
}

const StyledAuth = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #171726;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  max-width: 1000px;
  background: #202136;
  position: relative;
  border-radius: 24px;
`;
