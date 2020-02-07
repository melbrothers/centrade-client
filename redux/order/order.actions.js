import OrderActionTypes from './order.types';

export const placeOrderStart = cartItems => ({
  type: OrderActionTypes.PLACE_ORDER_START,
  payload: cartItems
});

export const placeOrderSuccess = orderItems => ({
  type: OrderActionTypes.PLACE_ORDER_SUCCESS,
  payload: orderItems
});

export const placeOrderFailure = error => ({
  type: OrderActionTypes.PLACE_ORDER_FAILURE,
  payload: error
});

export const getOrdersStart = () => ({
  type: OrderActionTypes.GET_ORDERS_START
});

export const getOrdersSuccess = orders => ({
  type: OrderActionTypes.GET_ORDERS_SUCCESS,
  payload: orders
});

export const getOrdersFailure = error => ({
  type: OrderActionTypes.GET_ORDERS_FAILURE,
  payload: error
});



