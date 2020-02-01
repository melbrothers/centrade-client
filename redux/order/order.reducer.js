import OrderActionTypes from './order.types';

const INITIAL_STATE = {
  order_items: [],
  error: null,
  loading: false
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.PLACE_ORDER_START:
      return {
        ...state,
        order_items: [],
        error: null,
        loading: true
      }
    case OrderActionTypes.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        order_items: action.payload,
        error: null,
        loading: false
      }
    case OrderActionTypes.PLACE_ORDER_FAILURE:
      return {
        ...state,
        order_items: [],
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
};

export default orderReducer;