import axios from "axios";
import {
  LOADING_UI,
  CREATE_ROOM,
  CLEAR_ERRORS,
  SET_ERRORS,
  SET_POPULAR_ROOMS,
  SET_YOUR_ROOMS,
  SET_CURRENT_ROOM,
  SET_ACTIVE_GOSSIPERS,
  SET_SEARCH_ROOMS,
  SET_FAVORITE_ROOMS,
} from "../types";
import { API_URL } from "../../config/index";

export const createRoom = (newRoom, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  if (newRoom.max === "") newRoom.max = 300;
  axios
    .post(`${API_URL}/rooms/create`, newRoom)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });

      dispatch({
        type: CREATE_ROOM,
        payload: res.data,
      });

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
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SET_POPULAR_ROOMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Can not get popular rooms", err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
    });
};

export const getYourRooms = (userId, amount, page = 0) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(
      `${API_URL}/rooms/your-rooms?userId=${userId}&amount=${amount}&page=${page}`
    )
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SET_YOUR_ROOMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Can not get your rooms", err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
    });
};

export const getSearchRooms = (amount, page, title) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`${API_URL}/rooms/search?title=${title}&amount=${amount}&page=${page}`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SET_SEARCH_ROOMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Can not perform searching", err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
    });
};

export const getFavoriteRooms = (userId, amount, page) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(
      `${API_URL}/rooms/favorite?userId=${userId}&amount=${amount}&page=${page}`
    )
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_FAVORITE_ROOMS, payload: res.data });
    })
    .catch((err) => {
      console.log("Can not fetching your favorite rooms", err);
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

export const getActiveGossipers = (amount, page) => (dispatch) => {
  axios
    .get(`${API_URL}/users/active?amount=${amount}&page=${page}`)
    .then((res) => {
      dispatch({
        type: SET_ACTIVE_GOSSIPERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Can not get active gossipers");
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
    });
};
