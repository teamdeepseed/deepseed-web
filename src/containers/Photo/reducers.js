import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAIL,
  SEARCH_PHOTOS_REQUEST,
  SEARCH_PHOTOS_SUCCESS,
  SEARCH_PHOTOS_FAIL,
} from './constants';

const initialState = {
  items: [],
  isFetching: false,
  errors: null,
};

const photo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case FETCH_PHOTOS_SUCCESS: {
      return Object.assign({}, state, {
        items: action.payload,
        isFetching: false
      });
    }
    case FETCH_PHOTOS_FAIL: {
      return Object.assign({}, state, {
        errors: action.payload,
        isFetching: false
      });
    }
    case SEARCH_PHOTOS_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case SEARCH_PHOTOS_SUCCESS: {
      return Object.assign({}, state, {
        items: action.payload,
        isFetching: false
      });
    }
    case SEARCH_PHOTOS_FAIL: {
      return Object.assign({}, state, {
        errors: action.payload,
        isFetching: false
      });
    }
    default: {
      return state;
    }
  }
};

export default photo;
