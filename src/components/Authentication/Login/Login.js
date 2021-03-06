import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/actions/userActions";

import Loading from "../../Loading/Loading";

const Login = () => {
  const history = useHistory();
  const loading = useSelector((state) => state.UI.loading);
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
      dispatch(loginUser(values, history));
    },
  });
  return (
    <>
      <StyledBoxRight>
        <StyledContainer>
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

            <button type="submit" disabled={loading}>
              {loading ? <Loading /> : "LOGIN"}
            </button>
          </form>

          <div>
            <Link to="/signup">Don't have an account?</Link>
          </div>

          <StyledLearnMore>
            <Link to="/learn" style={{ width: "100%" }}>
              <button>Learn more about Gossip</button>
            </Link>
          </StyledLearnMore>
        </StyledContainer>
      </StyledBoxRight>
    </>
  );
};

const StyledBoxRight = styled.div`
  width: 50%;
  padding: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    position: relative;
    color: white;
  }

  button {
    font-weight: bold;
    width: 100%;
    border-radius: 24px;
    padding: 0.75em;
    margin: 0.75em 0em;

    transition: ease 0.45s all;
    border: 1px solid grey;
    box-shadow: none;
    color: white;
    background: transparent;

    :hover {
      color: black;
      background: white;
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
      color: white;
      border: none;
      border: 1px solid grey;
      border-radius: 24px;
      background: transparent;
      outline: none;
      padding: 0.75em 1.25em;
    }
  }

  @media (max-width: 1000px) {
    padding: 2em;
  }

  @media (max-width: 700px) {
    min-width: 100vw;
  }
`;

const StyledError = styled.p`
  color: red;
  padding-left: 0.75em;

  font-size: 0.9em;
`;

const StyledLearnMore = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  @media (max-width: 700px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default Login;
