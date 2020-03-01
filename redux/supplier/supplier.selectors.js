import { createSelector } from "reselect";

export const selectSuppliers = state => state.supplier;

export const selectError = createSelector(
  [selectSuppliers],
  supplier => supplier.error
);

export const selectLoading = createSelector(
  [selectSuppliers],
  supplier => supplier.loading
);
