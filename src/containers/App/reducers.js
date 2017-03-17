import {
  TOGGLE_API
} from './constants';

const initialState = {
  isFetching: false,
  errors: null,
  liveApis: false,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_API: {
      return Object.assign({}, state, {
        liveApis: !state.liveApis
      });
    }
    default: {
      return state;
    }
  }
};

export default app;

