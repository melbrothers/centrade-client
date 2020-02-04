import { takeLatest, put, all, call } from 'redux-saga/effects';
import { placeOrderFailure, placeOrderSuccess, getOrdersSuccess, getOrdersFailure } from './order.actions';
import { clearItemsFromCartByShop } from '../cart/cart.actions';
import { placeOrder, getLastOrders } from './order.util';
import OrderActionTypes from './order.types';


export function* placeOrders({ payload }) {
  try {
    const orders = yield placeOrder(payload);
    if (orders && orders.data) {
      let shopKey = orders.data.supplier['@id'];
      yield put(placeOrderSuccess(orders.data));
      // remove items from cart by shop
      //yield put(clearCart());
      yield put(clearItemsFromCartByShop(shopKey));
    }
  } catch (err) {
    console.log(typeof (err));
    yield put(placeOrderFailure(err.response.data.detail));
  }
}

export function* getAllOrders() {
  try {
    const orders = yield getLastOrders();
    if (orders) {
      yield put(getOrdersSuccess(orders));
    }
  } catch (error) {
    yield put(getOrdersFailure(err.response.data.detail));
  }
}

export function* onPlaceOrderStart() {
  yield takeLatest(OrderActionTypes.PLACE_ORDER_START, placeOrders);
}

export function* onGetOrdersStart() {
  yield takeLatest(OrderActionTypes.GET_ORDERS_START, getAllOrders);
}

export function* orderSagas() {
  yield all(
    [
      call(onPlaceOrderStart),
      call(onGetOrdersStart)
    ]
  );
}