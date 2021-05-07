import {
  CREATE_ROOM,
  LOADING_DATA,
  SET_POPULAR_ROOMS,
  SET_YOUR_ROOMS,
  SET_CURRENT_ROOM,
  CLEAR_CURRENT_ROOM,
  SET_ACTIVE_GOSSIPERS,
} from "../types";

const initialState = {
  loading: false,
  activeGossipers: [],
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
    case SET_POPULAR_ROOMS:
      return {
        ...state,
        popularRooms: [...action.payload],
      };
    case SET_YOUR_ROOMS:
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
    case SET_ACTIVE_GOSSIPERS:
      return {
        ...state,
        activeGossipers: [...action.payload],
      };
    default:
      return state;
  }
};

export default dataReducer;
