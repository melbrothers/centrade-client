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



