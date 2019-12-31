import { createSelector } from 'reselect';

const selectProduct = state => state.product;

export const selectError = createSelector([selectProduct], (product) => product.error);

export const selectLoading = createSelector([selectProduct], (product) => product.loading);

export const selectCurrentCategories = createSelector([selectProduct], (product) => product.categoryList);