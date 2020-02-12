import QuoteActionTypes from './quote.types';

export const saveQuoteStart = quote => ({
  type: QuoteActionTypes.SAVE_QUOTE_START,
  payload: quote
});

export const saveQuoteSuccess = quote => ({
  type: QuoteActionTypes.SAVE_QUOTE_SUCCESS,
  payload: quote
});

export const saveQuoteFailure = error => ({
  type: QuoteActionTypes.SAVE_QUOTE_FAILURE,
  payload: error
});

export const setQuoteImages = images => ({
  type: QuoteActionTypes.SET_QUOTE_IMAGES,
  payload: images
});
