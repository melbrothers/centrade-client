import SupplierActionTypes from "./supplier.types";
import getSuppliers from "./supplier.util";

const INITIAL_STATE = {
  suppliers: null,
  loading: false,
  error: null
};

const supplierReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SupplierActionTypes.GET_SUPPLIER_START:
      return {
        ...state,
        loading: true
      };
    case SupplierActionTypes.GET_SUPPLIER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        suppliers: action.payload
      };
    case SupplierActionTypes.GET_SUPPLIER_FAILURE:
      return {
        ...state,
        loading: false,
        suppliers: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default supplierReducer;
