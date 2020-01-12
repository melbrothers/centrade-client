import ProductActionTypes from './product.types';

export const getCategoryStart = () => ({
  type: ProductActionTypes.GET_CATEGORY_START
});

export const getCategorySuccess = categoryList => ({
  type: ProductActionTypes.GET_CATEGORY_SUCCESS,
  payload: categoryList
});

export const getCategoryFailure = error => ({
  type: ProductActionTypes.GET_CATEGORY_FAILURE,
  payload: error
});

export const getProductsStart = () => ({
  type: ProductActionTypes.GET_PRODUCTS_START
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
