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

export const uploadImageStart = image => ({
  type: QuoteActionTypes.UPLOAD_QUOTE_IMAGE_START,
  payload: image
});

export const uploadImageSuccess = image => ({
  type: QuoteActionTypes.UPLOAD_QUOTE_IMAGE_SUCCESS,
  payload: image
});

export const uploadImageFailure = error => ({
  type: QuoteActionTypes.UPLOAD_QUOTE_IMAGE_FAILURE,
  payload: error
});
