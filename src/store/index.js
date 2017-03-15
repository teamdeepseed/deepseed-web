import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger';

import rootReducer from './reducers';
import photoSaga from 'containers/Photo/sagas';

const router = routerMiddleware(browserHistory)

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware,
  router
];

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const globalStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

// run the saga
sagaMiddleware.run(photoSaga);

export default globalStore;

