import axios from "axios";
import { LOADING_UI, CREATE_ROOM, CLEAR_ERRORS, SET_ERRORS } from "../types";

export const createRoom = (newRoom, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  if (newRoom.max === "") newRoom.max = 300;
  axios
    .post("/rooms/create", newRoom)
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
