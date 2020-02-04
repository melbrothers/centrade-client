import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure, signOutStart } from './user.actions';
import { signInWithEmailAndPassword, signUpWithEmailAndPassword } from './user.util';

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const signInResult = yield signInWithEmailAndPassword(email, password);
    console.log(signInResult);
    if (signInResult && signInResult.data && signInResult.data.token) {
      localStorage.setItem('user_token', signInResult.data.token);
      localStorage.setItem('user_refresh_token', signInResult.data.refresh_token);
      yield put(signInSuccess({ 'token': signInResult.data.token, 'refresh_token': signInResult.data.refresh_token, 'user': signInResult.data.user }));
    }
  } catch (error) {
    console.log(error);
    yield put(signInFailure(error.response.data.message));
  }
}

// export function* isUserAuthenticated() {
//   try {
//     const userAuth = getCurrentUser();
//     if (!userAuth) return;
//     yield getSnapshotFromUserAuth(userAuth);
//   } catch (error) {
//     yield put(signInFailure(error));
//   }
// }

export function* signUp({ payload: { email, password, name, abn } }) {
  try {
    const signUPResult = yield signUpWithEmailAndPassword(email, password, name, abn);
    console.log(signUPResult);
    if (signUPResult && signUPResult.data && signUPResult.data.token) {
      yield put(signUpSuccess(signUPResult.data.token));
    }
  } catch (err) {
    console.log(typeof (err));
    yield put(signUpFailure(err.response.data.detail));
  }
}

// export function* signInAfterSignUp({ payload: { user, additionalData } }) {
//   yield getSnapshotFromUserAuth(user, additionalData);
// }

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

// export function* onSignUpSuccess() {
//   yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
// }

// export function* onGoogleSignInStart() {
//   yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
// }

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// export function* checkUserSession() {
//   yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
// }

export function* onSignOutStart() {
  put(UserActionTypes.SIGN_OUT);
}

export function* userSagas() {
  yield all(
    [
      call(onEmailSignInStart),
      call(onSignUpStart),
      call(onSignOutStart)
    ]
  );
}