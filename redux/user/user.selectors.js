import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectError = createSelector([selectUser], (user) => user.error);

export const selectLoading = createSelector([selectUser], (user) => user.loading);

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

export const selectCurrentUserToken = createSelector(
  [selectCurrentUser],
  user => user.token
);
