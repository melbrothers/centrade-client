import { takeLatest, put, all, call } from "redux-saga/effects";

import { getSuppliersSuccess, getSuppliersFailure } from "./supplier.actions";

import { getSuppliersData } from "./supplier.util";

import SupplierActionTypes from "./supplier.types";

export function* getSuppliers() {
  try {
    const suppliers = yield getSuppliersData();
    if (suppliers && suppliers.data) {
      yield put(getSuppliersSuccess(suppliers.data));
    }
  } catch (error) {
    yield put(getSuppliersFailure(error.message));
  }
}

export function* onGetSuppliersStart() {
  yield takeLatest(SupplierActionTypes.GET_SUPPLIER_START, getSuppliers);
}

export function* supplierSagas() {
  yield all([call(onGetSuppliersStart)]);
}
