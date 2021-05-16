import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <StyledDashboard>
      <StyledSelectors>
        <StyledGroup>
          <Link to="/notifications/add">
            <button>Add a new notification</button>
          </Link>
        </StyledGroup>
      </StyledSelectors>
    </StyledDashboard>
  );
}

const StyledDashboard = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSelectors = styled.div`
  max-width: 700px;
  width: 100%;
  height: 100%;
`;

const StyledGroup = styled.div`
  width: 100%;
  margin: 1.25em 0em;
  display: flex;
  flex-direction: column;

  a > button {
    color: grey;
    width: 100%;
    background: transparent;
    padding: 0.85em 1.25em;
    border: 1px solid grey;
    border-radius: 24px;
    outline: transparent;
    text-align: left;
  }
`;
