import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_MESSAGES,
  CLEAR_MESSAGES,
} from "../types";

const initialState = {
  loading: false,
  errors: null,
  messages: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        messages: null,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false,
      };
    case SET_MESSAGES:
      return {
        ...state,
        loading: false,
        errors: null,
        messages: action.payload,
      };
    case CLEAR_MESSAGES:
      return {
        ...state,
        loading: false,
        messages: null,
      };
    default:
      return state;
  }
};

export default uiReducer;
