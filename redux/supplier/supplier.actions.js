import "./supplier.types";
import SupplierActionTypes from "./supplier.types";

export const getSuppliersStart = () => ({
  type: SupplierActionTypes.GET_SUPPLIER_START
});

export const getSuppliersSuccess = suppliers => ({
  type: SupplierActionTypes.GET_SUPPLIER_SUCCESS,
  payload: suppliers
});

export const getSuppliersFailure = error => ({
  type: SupplierActionTypes.GET_SUPPLIER_FAILURE,
  payload: error
});
