import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getCategoryList } from './product.util';
import ProductActionTypes from './product.types';
import { getCategorySuccess, getCategoryFailure } from './product.actions';

export function* getCategories({ payload: { token } }) {
  try {
    const categories = yield getCategoryList(token, 1);
    console.log(categories);
    if (categories) {
      yield put(getCategorySuccess(categories));
    } else {
      yield put(getCategoryFailure(categories.message))
    }
  } catch (error) {
    yield put(getCategoryFailure(error));
  }
}

export function* onGetCategoryStart() {
  yield takeLatest(ProductActionTypes.GET_CATEGORY_START, getCategories);
}

export function* productSagas() {
  yield all(
    [
      call(onGetCategoryStart)
    ]
  );
}