import React from "react";
import styled from "styled-components";

import Circle from "../Shapes/Circle";

const Login = () => {
  return (
    <StyledLogin>
      <StyledContainer>
        <StyledBoxLeft>
          <h2>Welcome to gossip</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>

          <button>Learn more</button>
        </StyledBoxLeft>
        <StyledBoxRight>
          <form>
            <h2>Log in</h2>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                required
              ></input>
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password..."
                required
              ></input>
            </div>

            <button className="btn btn-primary" type="submit">
              LOGIN
            </button>
          </form>
        </StyledBoxRight>
        <Circle top="10%" right="50%" size="80" />
        <Circle top="68%" right="50%" size="80" color="#1082eb" />
      </StyledContainer>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  width: 100%;
  height: 100%;

  background: rgb(230, 230, 230);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 600px;
  max-width: 1000px;

  position: relative;
`;

const StyledBoxLeft = styled.div`
  width: 50%;
  padding: 5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #1082eb;
  color: white;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;

  * {
    margin: 0.5em 0em;
  }

  button {
    background: transparent;

    border: 1px solid white;
    color: white;

    padding: 0.75em;
    border-radius: 24px;

    transition: ease 0.45s all;

    :hover {
      background: white;
      color: black;
    }
  }
`;

const StyledBoxRight = styled.div`
  width: 50%;
  padding: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;

  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  h2 {
    text-align: center;
  }

  form {
    width: 100%;

    div {
      margin: 1.5em 0em;
    }

    input {
      width: 100%;

      border: none;
      border-bottom: 1px solid rgb(200, 200, 200);
      background: transparent;
      outline: none;
      padding: 0.75em;
    }

    button {
      font-weight: bold;
      width: 100%;
      border-radius: 24px;
      padding: 0.75em;
      margin: 1.5em 0em;

      box-shadow: 1px 6px 8px 0 rgb(220, 220, 220);

      transition: ease 0.45s all;

      :hover {
        background: white;
        color: black;
        border: 1px solid grey;
        box-shadow: none;
      }
    }
  }
`;
export default Login;
