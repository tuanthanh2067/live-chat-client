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
  SET_MESSAGES,
  SET_IS_LIKED,
  CLEAR_CURRENT_ROOM,
  SET_NOTIFICATIONS,
} from "../types";
import { toast } from "react-toastify";
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
      toast(
        err.response.data.errors || err.response.data.validation.body.message
      );
    });
};

export const getPopularRooms =
  (amount, page = 0) =>
  (dispatch) => {
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
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data.errors,
        });
        toast(err.response.data.errors);
      });
  };

export const getYourRooms =
  (amount, page = 0) =>
  (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .get(`${API_URL}/rooms/your-rooms?amount=${amount}&page=${page}`)
      .then((res) => {
        dispatch({ type: CLEAR_ERRORS });
        dispatch({
          type: SET_YOUR_ROOMS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data.errors,
        });
        toast(err.response.data.errors);
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
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
      toast(err.response.data.errors);
    });
};

export const getFavoriteRooms = (amount, page) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`${API_URL}/rooms/favorite?amount=${amount}&page=${page}`)
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

export const getCurrentRoom = (id) => (dispatch) => {
  axios
    .get(`${API_URL}/rooms/${id}`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SET_CURRENT_ROOM,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
      toast(err.response.data.errors);
    });
};

export const updateUserInRoom = (roomId, history) => (dispatch) => {
  axios
    .put(`${API_URL}/rooms/update/${roomId}/user`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_MESSAGES, payload: res.data.messages });
      toast(res.data.messages);
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
      history.push("/");
      toast(err.response.data.errors);
    });
};

export const updateFavoriteInRoom = (roomId, type) => (dispatch) => {
  axios
    .put(`${API_URL}/rooms/update/${roomId}/favorite`, {
      type: type,
    })
    .then((res) => {
      dispatch({
        type: SET_IS_LIKED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
      toast(err.response.data.errors);
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
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
      toast(err.response.data.errors);
    });
};

export const updateAdmin = (userId, roomId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .put(`${API_URL}/rooms/update/${roomId}/admin`, {
      userId: userId,
    })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_MESSAGES, payload: res.data.messages });
      toast(res.data.messages);
      dispatch(getCurrentRoom(roomId));
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data.errors });
      toast(err.response.data.errors);
    });
};

export const updateMember = (userId, roomId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .put(`${API_URL}/rooms/update/${roomId}/member`, {
      userId: userId,
    })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_MESSAGES, payload: res.data.messages });
      toast(res.data.messages);
      dispatch(getCurrentRoom(roomId));
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data.errors });
      toast(err.response.data.errors);
    });
};

export const getIsLiked = (roomId) => (dispatch) => {
  axios
    .get(`${API_URL}/rooms/${roomId}/isLiked`)
    .then((res) => {
      dispatch({ type: SET_IS_LIKED, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data.errors });
      toast(err.response.data.errors);
    });
};

export const deleteRoom = (roomId, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .delete(`${API_URL}/rooms/${roomId}`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_MESSAGES, payload: res.data.messages });
      dispatch({ type: CLEAR_CURRENT_ROOM });
      history.push("/");
      toast(res.data.messages);
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data.errors });
      toast(err.response.data.errors);
    });
};

export const getNotifications = (amount, page) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`${API_URL}/notifications?amount=${amount}&page=${page}`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_NOTIFICATIONS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data.errors });
      toast(err.response.data.errors);
    });
};

export const addNotification = (values, image) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(
      `${API_URL}/notifications/add?title=${values.title}&description=${values.description}&detail=${values.detail}`,
      image
    )
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_MESSAGES, payload: res.data.messages });
      toast(res.data.messages);
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload:
          err.response.data.errors || err.response.data.validation.body.message,
      });
      toast(
        err.response.data.errors || err.response.data.validation.body.message
      );
    });
};
