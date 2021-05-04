import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import Gossip from "../../assets/png/gossip.png";

const ToolBar = () => {
  return (
    <StyledToolBar>
      <Link
        to="/"
        style={{
          margin: "1.5em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Gossip}
          alt="gossip-img"
          style={{ width: "48px", height: "48px" }}
        />
      </Link>
      <StyledTools>
        <NavLink to="/home" activeClassName="selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
          </svg>
        </NavLink>

        <NavLink to="/favorites" activeClassName="selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
        </NavLink>

        <NavLink to="/profile" activeClassName="selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
          </svg>
        </NavLink>

        <NavLink to="/notifications" activeClassName="selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
          </svg>
        </NavLink>

        <NavLink to="/about" activeClassName="selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
          </svg>
        </NavLink>

        <NavLink to="/settings" activeClassName="selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
          </svg>
        </NavLink>
      </StyledTools>
    </StyledToolBar>
  );
};

const StyledToolBar = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  margin-top: 2.5em;
  height: 91%;
  flex-direction: column;
  min-width: 90px;
  margin-left: 0.5em;
  border-radius: 40px;
  border: 1px solid #373759;
  background: #27273f;
  color: white;

  @media (max-width: 1000px) {
    width: 98%;
    min-height: 90px;
    flex-direction: row;
    margin-top: 0.35em;
    position: static;
    margin-left: 0;
  }
`;

const StyledTools = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (max-width: 675px) {
    flex-wrap: wrap;
  }

  .selected {
    svg {
      fill: #8caaf3;
    }
  }

  a {
    margin: 2em 0em;
    width: 90px;
    text-align: center;
    svg {
      fill: #546896;
      width: 32px;
      height: 32px;
      transition: all 0.35s ease;

      :hover {
        fill: #8caaf3;
      }
    }
  }
`;

export default ToolBar;
