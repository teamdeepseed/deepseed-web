import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import HomePage from 'containers/pages/HomePage';
import NotFoundPage from 'containers/pages/NotFoundPage';

module.exports = (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="*" components={NotFoundPage} />
  </Route>
);
