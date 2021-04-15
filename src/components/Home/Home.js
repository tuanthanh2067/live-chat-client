import React from "react";
import styled from "styled-components";

import ToolBar from "../ToolBar/ToolBar";

const Home = () => {
  return (
    <StyledHome>
      <StyledMain>
        <ToolBar />
      </StyledMain>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100%;
  height: 100%;

  background: #171726;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMain = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 96%;
  margin: auto;
  background: #202136;
  display: flex;
  align-items: center;

  border: 1px solid #373759;
  border-radius: 24px;
`;

export default Home;
