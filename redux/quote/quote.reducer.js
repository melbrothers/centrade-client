import QuoteActionTypes from './quote.types';
import { addUploadImages } from './quote.util';

const INITIAL_STATE = {
  quote: null,
  error: null,
  loading: false,
  uploadedImages: []
};

const quoteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuoteActionTypes.SAVE_QUOTE_START:
    case QuoteActionTypes.UPLOAD_QUOTE_IMAGE_START:
      return {
        ...state,
        loading: true
      }
    case QuoteActionTypes.SAVE_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.payload,
      }
    case QuoteActionTypes.UPLOAD_QUOTE_IMAGE_SUCCESS:
      return {
        ...state,
        uploadedImages: addUploadImages(state.uploadedImages, action.payload)
      }
    case QuoteActionTypes.SAVE_QUOTE_FAILURE:
    case QuoteActionTypes.UPLOAD_QUOTE_IMAGE_FAILURE:
      return {
        ...state,
        quote: null,
        error: action.payload,
        loading: false
      }

    default:
      return state;
  }
};

export default quoteReducer;
