import QuoteActionTypes from './quote.types';

const INITIAL_STATE = {
  quote: null,
  error: null,
  loading: false,
  uploadedImages: []
};

const quoteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuoteActionTypes.SAVE_QUOTE_START:
      return {
        ...state,
        loading: true
      }
    case QuoteActionTypes.SAVE_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.payload,
      }
    case QuoteActionTypes.SAVE_QUOTE_FAILURE:
      return {
        ...state,
        quote: null,
        error: action.payload,
        loading: false
      }
    case QuoteActionTypes.SET_QUOTE_IMAGES:
      return {
        ...state,
        uploadedImages: action.payload
      };
    default:
      return state;
  }
};

export default quoteReducer;
