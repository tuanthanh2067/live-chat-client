import {
  CREATE_ROOM,
  LOADING_DATA,
  GET_POPULAR_ROOMS,
  GET_YOUR_ROOMS,
} from "../types";

const initialState = {
  loading: false,
  activeGossiper: [],
  popularRooms: [],
  yourRooms: [],
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
    default:
      return state;
  }
};

export default dataReducer;
