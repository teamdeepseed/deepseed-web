import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import photo from 'containers/Photo/reducers';

const rootReducer = combineReducers({
  routing,
  photo,
});

export default rootReducer;

