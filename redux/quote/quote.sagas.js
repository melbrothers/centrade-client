import { takeLatest, put, all, call } from 'redux-saga/effects';

import { saveQuoteSuccess, saveQuoteFailure } from './quote.actions';
import { saveQuote } from './quote.util';

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

export function* quoteSagas() {
  yield all(
    [
      call(onSaveQuoteStart),
    ]
  );
}