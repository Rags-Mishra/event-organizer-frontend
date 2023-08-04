import { EVENT_ERROR, GET_EVENTS, UPDATE_LIKE } from "../types.js";
export default (state, action) => {
  switch (action.type) {
    case GET_EVENTS: //changes the state of events
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case UPDATE_LIKE: //changes the state of like
    case EVENT_ERROR: //changes the state of error
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
