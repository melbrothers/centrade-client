import OrderActionTypes from './order.types';

const INITIAL_STATE = {
  ordered_items: [],
  orders_all: [],
  error: null,
  loading: false
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.PLACE_ORDER_START:
    case OrderActionTypes.GET_ORDERS_START:
      return {
        ...state,
        ordered_items: [],
        error: null,
        loading: true
      }
    case OrderActionTypes.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        ordered_items: action.payload,
        error: null,
        loading: false
      }
    case OrderActionTypes.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders_all: action.payload,
        error: null,
        loading: false
      }
    case OrderActionTypes.PLACE_ORDER_FAILURE:
      return {
        ...state,
        ordered_items: [],
        error: action.payload,
        loading: false
      }
    case OrderActionTypes.GET_ORDERS_FAILURE:
      return {
        ...state,
        orders_all: [],
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
};

export default orderReducer;