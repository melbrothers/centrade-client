import { takeLatest, put, all, call } from 'redux-saga/effects';

import { saveQuoteSuccess, saveQuoteFailure, uploadImageFailure, uploadImageSuccess } from './quote.actions';
import { saveQuote, uploadImage } from './quote.util';

import QuoteActionTypes from './quote.types';


export function* saveQuotes({ payload }) {
  try {
    const quotes = yield saveQuote(payload);
    if (quotes && quotes.data) {
      yield put(saveQuoteSuccess(quotes.data));
    }
  } catch (err) {
    console.log(typeof (err));
    yield put(saveQuoteFailure(err.response.data.detail));
  }
}

export function* onSaveQuoteStart() {
  yield takeLatest(QuoteActionTypes.SAVE_QUOTE_START, saveQuotes);
}

export function* uploadImageProcess({ payload }) {
  try {
    const uploadedImage = yield uploadImage(payload);
    if (uploadedImage && uploadedImage.data) {
      yield put(uploadImageSuccess(uploadedImage.data));
    }
  } catch (error) {
    yield put(uploadImageFailure(error.response.data.detail));
  }
}

export function* onUploadImageStart() {
  yield takeLatest(QuoteActionTypes.UPLOAD_QUOTE_IMAGE_START, uploadImageProcess);
}

export function* quoteSagas() {
  yield all(
    [
      call(onSaveQuoteStart),
      call(onUploadImageStart)
    ]
  );
}