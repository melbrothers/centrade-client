import { createSelector } from 'reselect';

export const selectQuote = state => state.quote;


export const selectUploadedImages = createSelector(
    [selectQuote],
    quote => quote.uploadedImages
);

