import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getCategoryList, getProductList, getProductListByPage } from './product.util';
import { getRefreshToken } from '../user/user.util';

import ProductActionTypes from './product.types';
import { getCategorySuccess, getCategoryFailure, getProductsSuccess, getProductsFailure, getProductsPage } from './product.actions';

export function* getCategories() {
  try {
    const categories = yield getCategoryList(1);
    if (categories && categories.data['hydra:member']) {
      yield put(getCategorySuccess(categories.data['hydra:member']));
    } else {
      yield put(getCategoryFailure(categories.message))
    }
  } catch (error) {
    if (error.response.status === 401) {
      const userRefreshToken = localStorage.getItem('user_refresh_token');
      const refreshToken = yield getRefreshToken(userRefreshToken);
    }
    yield put(getCategoryFailure(error));
  }
}

export function* getProducts() {
  try {
    const queryParams = window.location.search.slice(1);
    const products = yield getProductList(queryParams, 1);
    if (products && products.data['hydra:member']) {
      yield put(getProductsSuccess(products.data['hydra:member']));
      yield put(getProductsPage(products.data['hydra:view']));
    } else {
      yield put(getProductsFailure(products.message));
    }
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}
export function* getProductsByPage({ payload: { navUrl } }) {
  try {
    const products = yield getProductListByPage(navUrl);
    if (products && products.data['hydra:member']) {
      yield put(getProductsSuccess(products.data['hydra:member']));
      yield put(getProductsPage(products.data['hydra:view']));
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

export function* onGetProductsByPageStart() {
  yield takeLatest(ProductActionTypes.GET_PRODUCTS_BY_PAGE, getProductsByPage);
}

export function* productSagas() {
  yield all(
    [
      call(onGetCategoryStart),
      call(onGetProductsStart),
      call(onGetProductsByPageStart)
    ]
  );
}