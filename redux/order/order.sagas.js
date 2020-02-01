import { takeLatest, put, all, call } from 'redux-saga/effects';
import { placeOrderFailure, placeOrderSuccess } from './order.actions';
import { clearCart } from '../cart/cart.actions';
import { placeOrder } from './order.util';
import OrderActionTypes from './order.types';


export function* placeOrders({ payload }) {
  try {
    const orders = yield placeOrder(payload);
    if (orders && orders.data) {
      yield put(placeOrderSuccess(orders.data));
      // clear cart
      yield put(clearCart());
    }
  } catch (err) {
    console.log(typeof (err));
    yield put(placeOrderFailure(err.response.data.detail));
  }
}

export function* onPlaceOrderStart() {
  yield takeLatest(OrderActionTypes.PLACE_ORDER_START, placeOrders);
}

export function* orderSagas() {
  yield all(
    [
      call(onPlaceOrderStart),
    ]
  );
}