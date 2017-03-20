import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import HomePage from 'containers/pages/HomePage';
import PhotoPage from 'containers/pages/PhotoPage';
import NotFoundPage from 'containers/pages/NotFoundPage';

module.exports = (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="/photo/:id" components={PhotoPage} />
    <Route path="*" components={NotFoundPage} />
  </Route>
);