import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import photo from 'containers/Photo/reducers';
import app from 'containers/App/reducers';

const rootReducer = combineReducers({
  routing,
  app,
  photo,
});

export default rootReducer;
