import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { productSagas } from "./product/product.sagas";
import { orderSagas } from "./order/order.sagas";
import { quoteSagas } from "./quote/quote.sagas";
import { supplierSagas } from "./supplier/supplier.sagas";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productSagas),
    call(orderSagas),
    call(quoteSagas),
    call(supplierSagas)
  ]);
}
