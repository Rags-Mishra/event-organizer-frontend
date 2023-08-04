import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        user:action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
