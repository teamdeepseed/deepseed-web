import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAIL,
  SEARCH_PHOTOS_REQUEST,
  SEARCH_PHOTOS_SUCCESS,
  SEARCH_PHOTOS_FAIL,
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL
} from './constants';

const initialState = {
  items: [],
  item: null,
  isFetching: false,
  errors: null,
};

const photo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FETCH_PHOTOS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        isFetching: false
      };
    }
    case FETCH_PHOTOS_FAIL: {
      return {
        ...state,
        errors: action.payload,
        isFetching: false
      };
    }
    case SEARCH_PHOTOS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case SEARCH_PHOTOS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        isFetching: false
      };
    }
    case SEARCH_PHOTOS_FAIL: {
      return {
        ...state,
        errors: action.payload,
        isFetching: false
      };
    }
    case GET_PHOTO_REQUEST: {
      return {
        ...state,
        item: null,
        isFetching: true,
      };
    }
    case GET_PHOTO_SUCCESS: {
      return {
        ...state,
        item: action.payload,
        isFetching: false
      };
    }
    case GET_PHOTO_FAIL: {
      return {
        ...state,
        errors: action.payload,
        isFetching: false
      };
    }
    default: {
      return state;
    }
  }
};

export default photo;
