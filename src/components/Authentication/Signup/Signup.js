import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../../redux/actions/userActions";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../../../redux/types";

import Loading from "../../Loading/Loading";

const Signup = () => {
  const loading = useSelector((state) => state.UI.loading);
  const errors = useSelector((state) => state.UI.errors);
  const messages = useSelector((state) => state.UI.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    toast(errors || messages);

    return () => {
      dispatch({
        type: CLEAR_ERRORS,
      });
      dispatch({
        type: CLEAR_MESSAGES,
      });
    };
  }, [errors, messages, dispatch]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      userName: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(7, "Must be at least 7 characters")
        .max(30, "Must be at most 30 characters")
        .required("Password is required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      userName: Yup.string()
        .required("User name is required")
        .min(7, "Must be at least 7 characters")
        .max(30, "Must be at most 30 characters"),
    }),
    onSubmit: (values) => {
      dispatch(signupUser(values));
    },
  });

  const autoUserNameGenerator = () => {
    const randomName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    });
    formik.setFieldValue("userName", randomName);
  };

  return (
    <>
      <StyledBoxRight>
        <StyledContainer>
          <form onSubmit={formik.handleSubmit}>
            <h2>Sign up</h2>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                onChange={formik.handleChange}
                value={formik.values.email}
                required
              ></input>
            </div>
            <StyledError>{formik.errors.email}</StyledError>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password..."
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              ></input>
            </div>
            <StyledError>{formik.errors.password}</StyledError>

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password..."
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                required
              ></input>
            </div>
            <StyledError>{formik.errors.confirmPassword}</StyledError>

            <StyledUserName>
              <input
                type="text"
                name="userName"
                placeholder="Your unique user name..."
                onChange={formik.handleChange}
                value={formik.values.userName}
                required
              ></input>

              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                onClick={autoUserNameGenerator}
              >
                <path d="M23.621 9.012c.247.959.379 1.964.379 3 0 6.623-5.377 11.988-12 11.988s-12-5.365-12-11.988c0-6.623 5.377-12 12-12 2.581 0 4.969.822 6.927 2.211l1.718-2.223 1.935 6.012h-6.58l1.703-2.204c-1.62-1.128-3.582-1.796-5.703-1.796-5.52 0-10 4.481-10 10 0 5.52 4.48 10 10 10 5.519 0 10-4.48 10-10 0-1.045-.161-2.053-.458-3h2.079zm-7.621 7.988h-8v-6h1v-2c0-1.656 1.344-3 3-3s3 1.344 3 3v2h1v6zm-5-8v2h2v-2c0-.552-.448-1-1-1s-1 .448-1 1z" />
              </svg>
            </StyledUserName>
            <StyledError>{formik.errors.userName}</StyledError>

            <button type="submit" disabled={loading}>
              {loading ? <Loading /> : "SIGNUP"}
            </button>
          </form>

          <div>
            <Link to="/login">Already have an account?</Link>
          </div>

          <StyledLearnMore>
            <Link to="/learn" style={{ width: "100%" }}>
              <button>Learn more about Gossip</button>
            </Link>
          </StyledLearnMore>
        </StyledContainer>
      </StyledBoxRight>
      <ToastContainer />
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

  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

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
    margin: 1em 0em;

    transition: ease 0.45s all;
    background: white;
    border: 1px solid grey;

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
      margin-top: 1em;
    }

    input {
      width: 100%;
      border: none;
      border: 1px solid grey;
      border-radius: 24px;
      background: transparent;
      outline: none;
      color: white;
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

const StyledUserName = styled.div`
  position: relative;

  svg {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 90%;
    transform: translateY(-50%);
    fill: grey;
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

export default Signup;
