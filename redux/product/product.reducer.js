import ProductActionTypes from './product.types';

const INITIAL_STATE = {
  categoryList: null,
  products: null,
  pageView: null,
  error: null,
  loading: false
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.GET_CATEGORY_START:
      return {
        ...state,
        categoryList: null,
        products: null,
        pageView: null,
        error: null,
        loading: true
      }
    case ProductActionTypes.GET_PRODUCTS_START:
      return {
        ...state,
        products: null,
        pageView: null,
        error: null,
        loading: true
      }
    case ProductActionTypes.GET_PRODUCTS_PAGE:
      return {
        ...state,
        pageView: action.payload,
        error: null,
        loading: false
      }
    case ProductActionTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryList: action.payload,
        error: null,
        loading: false
      }
    case ProductActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null,
        loading: false
      }
    case ProductActionTypes.GET_CATEGORY_FAILURE:
      return {
        ...state,
        categoryList: null,
        pageView: null,
        error: action.payload,
        loading: false
      }
    case ProductActionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        products: null,
        pageView: null,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export default productReducer;