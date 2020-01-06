import ProductActionTypes from './product.types';

export const getCategoryStart = token => ({
  type: ProductActionTypes.GET_CATEGORY_START,
  payload: token
});

export const getCategorySuccess = categoryList => ({
  type: ProductActionTypes.GET_CATEGORY_SUCCESS,
  payload: categoryList
});

export const getCategoryFailure = error => ({
  type: ProductActionTypes.GET_CATEGORY_FAILURE,
  payload: error
});

export const getProductsStart = (token) => ({
  type: ProductActionTypes.GET_PRODUCTS_START,
  payload: token
});

export const getProductsSuccess = products => ({
  type: ProductActionTypes.GET_PRODUCTS_SUCCESS,
  payload: products
});

export const getProductsFailure = error => ({
  type: ProductActionTypes.GET_PRODUCTS_FAILURE,
  payload: error
});

export const getProductsPage = pageView => ({
  type: ProductActionTypes.GET_PRODUCTS_PAGE,
  payload: pageView
});

export const getProductsByPageStart = (navUrl) => ({
  type: ProductActionTypes.GET_PRODUCTS_BY_PAGE,
  payload: navUrl
});
