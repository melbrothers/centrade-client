import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => {
  console.log(error);
  return ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
  })
};

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = (user) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const getRefreshtokenStart = token => ({
  type: UserActionTypes.GET_REFRESHTOKEN_START,
  payload: token
});

export const getRefreshtokenSuccess = refreshedToken => ({
  type: UserActionTypes.GET_PRODUCTS_SUCCESS,
  payload: refreshedToken
});

export const getRefreshtokenFailure = error => ({
  type: UserActionTypes.GET_REFRESHTOKEN_FAILURE,
  payload: error
});