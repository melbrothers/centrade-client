import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getCategoryList, getProductList } from './product.util';
import ProductActionTypes from './product.types';
import { getCategorySuccess, getCategoryFailure, getProductsSuccess, getProductsFailure } from './product.actions';

export function* getCategories({ payload: { token } }) {
  try {
    const categories = yield getCategoryList(token, 1);
    console.log(categories);
    if (categories && categories.data) {
      yield put(getCategorySuccess(categories.data));
    } else {
      yield put(getCategoryFailure(categories.message))
    }
  } catch (error) {
    yield put(getCategoryFailure(error));
  }
}

export function* getProducts({ payload: { token } }) {
  try {
    const products = yield getProductList(token, 1);
    console.log(products);
    if (products && products.data) {
      yield put(getProductsSuccess(products.data));
    } else {
      yield put(getProductsFailure(products.message));
    }
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

export function* onGetCategoryStart() {
  yield takeLatest(ProductActionTypes.GET_CATEGORY_START, getCategories);
}

export function* onGetProductsStart() {
  yield takeLatest(ProductActionTypes.GET_PRODUCTS_START, getProducts);
}

export function* productSagas() {
  yield all(
    [
      call(onGetCategoryStart),
      call(onGetProductsStart)
    ]
  );
}