import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';
import rootReducer from './root-reducer';



function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );


  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

// sagaMiddleware.run(rootSaga);
export default configureStore;