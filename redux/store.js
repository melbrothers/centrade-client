import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootSaga from './root-saga';
import rootReducer from './root-reducer';


const configureStore = (initialState) => {
  let store;
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];
  const isClient = typeof window !== 'undefined';

  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
      key: 'root',
      storage
    };
    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      applyMiddleware(...middlewares)
    );
    store.__PERSISTOR = persistStore(store);

  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares)
    );
    // if (process.env.NODE_ENV === 'development') {
    //   middlewares.push(logger);
    // }
  }

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
