import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'

// Local modules
import rootReducer from './reducers';

const router = routerMiddleware(browserHistory)

const globalStore = () => createStore(
  rootReducer,
  applyMiddleware(router)
);

export default globalStore;
