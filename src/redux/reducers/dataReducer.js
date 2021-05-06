import {
  CREATE_ROOM,
  LOADING_DATA,
  GET_POPULAR_ROOMS,
  GET_YOUR_ROOMS,
  SET_CURRENT_ROOM,
  CLEAR_CURRENT_ROOM,
} from "../types";

const initialState = {
  loading: false,
  activeGossiper: [],
  popularRooms: [],
  yourRooms: [],
  currentRoom: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ROOM:
      return {
        ...state,
        yourRooms: [action.payload, ...state.yourRooms],
      };
    case GET_POPULAR_ROOMS:
      return {
        ...state,
        popularRooms: [...action.payload],
      };
    case GET_YOUR_ROOMS:
      return {
        ...state,
        yourRooms: [...action.payload],
      };
    case SET_CURRENT_ROOM:
      return {
        ...state,
        currentRoom: { ...action.payload },
      };
    case CLEAR_CURRENT_ROOM:
      return {
        ...state,
        currentRoom: null,
      };
    default:
      return state;
  }
};

export default dataReducer;
