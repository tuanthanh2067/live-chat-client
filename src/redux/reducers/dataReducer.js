import { CREATE_ROOM, LOADING_DATA } from "../types";

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

    default:
      return state;
  }
};

export default dataReducer;
