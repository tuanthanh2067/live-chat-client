import axios from "axios";
import {
  LOADING_UI,
  CREATE_ROOM,
  CLEAR_ERRORS,
  SET_ERRORS,
  GET_POPULAR_ROOMS,
  GET_YOUR_ROOMS,
} from "../types";
import { API_URL } from "../../config/index";

export const createRoom = (newRoom, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  if (newRoom.max === "") newRoom.max = 300;
  axios
    .post(`${API_URL}/rooms/create`, newRoom)
    .then((res) => {
      dispatch({
        type: CREATE_ROOM,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });

      // redirect to the room when successfully created
      history.push(`/room/${res.data.roomId}`);
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload:
          err.response.data.errors || err.response.data.validation.body.message,
      });
    });
};

export const getPopularRooms = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`${API_URL}/rooms/get-popular`)
    .then((res) => {
      dispatch({
        type: GET_POPULAR_ROOMS,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      console.log("Can not get popular rooms", err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
    });
};

export const getYourRooms = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`${API_URL}/rooms/your-room`)
    .then((res) => {
      dispatch({
        type: GET_YOUR_ROOMS,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      console.log("Can not get your rooms", err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
    });
};
