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