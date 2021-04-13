import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

import Circle from "../Shapes/Circle";

import Loading from "../Loading/Loading";

const Login = () => {
  const history = useHistory();

  const [loginTouched, setLoginTouched] = useState(false);

  const loading = useSelector((state) => state.UI.loading);
  const errors = useSelector((state) => state.UI.errors);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      setLoginTouched(true);
      dispatch(loginUser(values, history));
    },
  });
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
          <form onSubmit={formik.handleSubmit}>
            <h2>Log in</h2>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                onChange={formik.handleChange}
                value={formik.values.email}
                required
              ></input>
              <StyledError>{formik.errors.email}</StyledError>
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password..."
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              ></input>
              <StyledError>{formik.errors.password}</StyledError>
            </div>

            {loginTouched && <StyledError>{errors}</StyledError>}

            <button
              className="btn btn-primary"
              type="submit"
              disabled={loading}
            >
              {loading ? <Loading /> : "LOGIN"}
            </button>
          </form>

          <div>
            <Link to="/signup">Don't have an account?</Link>
          </div>
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

  overflow: hidden;

  background: rgb(240, 240, 240);

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 350px;
    height: 350px;
  }
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

  h2 {
    position: relative;
    ::after {
      bottom: -8px;
      left: 0%;
      content: "";
      position: absolute;
      width: 150px;
      height: 4px;
      background: white;
      border-radius: 50px;
    }
  }

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
    position: relative;
    ::after {
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      position: absolute;
      width: 50px;
      height: 4px;
      background: #1082eb;
      border-radius: 50px;
    }
  }

  form {
    width: 100%;

    div {
      margin: 1.25em 0em;
    }

    input[type="email"],
    input[type="password"] {
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
      margin: 0.75em 0em;

      /* box-shadow: 1px 6px 8px 0 rgb(220, 220, 220); */

      transition: ease 0.45s all;
      background: white;
      border: 1px solid grey;
      box-shadow: none;
      color: black;
    }
  }
`;

const StyledError = styled.p`
  color: red;
  padding-left: 0.75em;

  font-size: 0.9em;
`;

export default Login;
