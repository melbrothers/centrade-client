import { takeLatest, put, all, call } from 'redux-saga/effects';
import { signInWithEmailAndPassword, signUpWithEmailAndPassword } from './user.util';
import UserActionTypes from './user.types';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure, signOutStart } from './user.actions';

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const signInResult = yield signInWithEmailAndPassword(email, password);
    console.log(signInResult);
    if (signInResult.token) {
      yield put(signInSuccess(signInResult.token));
    } else {
      yield put(signInFailure(signInResult.message))
    }
  } catch (error) {
    yield put(signInFailure(error));
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
    if (signUPResult.token) {
      yield put(signUpSuccess(signUPResult.token));
    } else {
      yield put(signUpFailure(signUPResult.detail))
    }
  } catch (error) {
    yield put(signUpFailure(error));
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