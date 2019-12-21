import { takeLatest, put, all, call } from 'redux-saga/effects';
import { signInWithEmailAndPassword } from './user.util';
import UserActionTypes from './user.types';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure, signOutStart } from './user.actions';

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const signInResult = yield signInWithEmailAndPassword(email, password);
    console.log(signInResult);
    if (signInResult.token) {
      yield put(signInSuccess(token));
    } else {
      yield put(signInFailure(signInResult.message))
    }
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  yield put(signOutStart());
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

// export function* signUp({ payload: { email, password, displayName } }) {
//   try {
//     const { user } = yield auth.createUserWithEmailAndPassword(email, password);
//     yield put(signUpSuccess({ user, additionalData: { displayName } }));
//   } catch (error) {
//     yield put(signUpFailure(error));
//   }
// }

// export function* signInAfterSignUp({ payload: { user, additionalData } }) {
//   yield getSnapshotFromUserAuth(user, additionalData);
// }

// export function* onSignUpStart() {
//   yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
// }

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
  yield takeLatest(UserActionTypes.SIGN_OUT, signOut);
}

export function* userSagas() {
  yield all(
    [
      call(onEmailSignInStart),
      call(onSignOutStart)
    ]
  );
}