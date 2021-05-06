import axios from "axios";
import {
  LOADING_UI,
  CREATE_ROOM,
  CLEAR_ERRORS,
  SET_ERRORS,
  GET_POPULAR_ROOMS,
  GET_YOUR_ROOMS,
  SET_CURRENT_ROOM,
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

export const getPopularRooms = (amount, page = 0) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`${API_URL}/rooms/get-popular?amount=${amount}&page=${page}`)
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

export const updateUserInRoom = (roomId, userId) => (dispatch) => {
  axios
    .put(`${API_URL}/rooms/update/${roomId}/user`, { userId: userId })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SET_CURRENT_ROOM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Can not update the room");
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
    });
};

export const updateFavoriteInRoom = (roomId, userId, type) => (dispatch) => {
  axios
    .put(`${API_URL}/rooms/update/${roomId}/favorite`, {
      userId: userId,
      type: type,
    })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SET_CURRENT_ROOM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Can not update the room");
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
    });
};
