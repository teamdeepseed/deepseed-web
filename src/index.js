import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import globalStore from './store';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, globalStore);

ReactDOM.render(
  <Provider store={globalStore}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

