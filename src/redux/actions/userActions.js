import {
  SET_USER,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SET_ERRORS,
  SET_MESSAGES,
  CLEAR_MESSAGES,
} from "../types";

import axios from "axios";

const setAuthorizationHeader = (token) => {
  const userToken = `Bearer ${token}`;
  localStorage.setItem("userToken", userToken);
  // we send this authorization with this token every time we send a request
  axios.defaults.headers.common["Authorization"] = userToken;
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/users/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: CLEAR_MESSAGES });
  dispatch({ type: LOADING_UI });

  axios
    .post("/auth/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/home");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
    });
};

export const signupUser = (newUserData) => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: CLEAR_MESSAGES });
  dispatch({ type: LOADING_UI });

  axios
    .post("/auth/signup", newUserData)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_MESSAGES, payload: res.data.message });
    })
    .catch((err) => {
      dispatch({
        type: CLEAR_MESSAGES,
      });
      dispatch({
        type: SET_ERRORS,
        payload:
          err.response.data.errors || err.response.data.validation.body.message,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({
    type: SET_UNAUTHENTICATED,
  });
};
