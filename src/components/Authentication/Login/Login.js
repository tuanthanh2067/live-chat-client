import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/actions/userActions";
import { CLEAR_ERRORS } from "../../../redux/types";

import Loading from "../../Loading/Loading";

const Login = () => {
  const history = useHistory();

  const loading = useSelector((state) => state.UI.loading);
  const errors = useSelector((state) => state.UI.errors);
  const dispatch = useDispatch();

  useEffect(() => {
    toast(errors);

    return () => {
      dispatch({
        type: CLEAR_ERRORS,
      });
    };
  }, [errors]);

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

        <button type="submit" disabled={loading}>
          {loading ? <Loading /> : "LOGIN"}
        </button>
      </form>

      <div>
        <Link to="/signup">Don't have an account?</Link>
      </div>

      <ToastContainer />
    </StyledBoxRight>
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
  }
`;

const StyledError = styled.p`
  color: red;
  padding-left: 0.75em;

  font-size: 0.9em;
`;

export default Login;
