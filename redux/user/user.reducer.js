import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        currentUser: null,
        error: null,
        loading: true
      }
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        loading: false
      };
    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
        error: null,
        loading: false
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default userReducer;