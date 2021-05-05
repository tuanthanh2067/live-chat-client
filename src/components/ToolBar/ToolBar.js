import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import Person from "../../assets/jpg/person.jpg";

const ToolBar = () => {
  return (
    <StyledToolBar>
      <Link
        to="/profile"
        style={{
          margin: "1.5em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledUserImage src={Person} alt="usr-img"></StyledUserImage>
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

        <NavLink to="/create-room" activeClassName="selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
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
  width: 80px;
  margin-left: 0.5em;
  border-radius: 40px;
  border: 1px solid #373759;
  background: #27273f;
  color: white;

  @media (max-width: 1000px) {
    width: 98%;
    height: 80px;
    flex-direction: row;
    margin-top: 0.35em;
    position: static;
    margin-left: 0;
  }

  @media (max-width: 700px) {
    height: 130px;
  }
`;

const StyledTools = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (max-width: 675px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .selected {
    svg {
      fill: #8caaf3;
    }
  }

  a {
    /* margin: 2em 0em; */
    width: 80px;
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

const StyledUserImage = styled.img`
  height: 44px;
  width: 44px;
  object-fit: cover;
  border-radius: 50%;
`;

export default ToolBar;
