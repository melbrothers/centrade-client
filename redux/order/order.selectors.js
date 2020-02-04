import { createSelector } from 'reselect';

const selectOrders = state => state.order;

export const selectOrderedItems = createSelector(
  [selectOrders],
  order => order.ordered_items
);

export const selectOrderError = createSelector([selectOrders], order => order.error);

export const selectOrderLoading = createSelector([selectOrders], order => order.loading);
