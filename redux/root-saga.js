import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.sagas';
import { productSagas } from './product/product.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productSagas)
  ])
}