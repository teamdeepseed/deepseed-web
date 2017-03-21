import { takeLatest, call, put, select } from 'redux-saga/effects';

import { FETCH_PHOTOS_REQUEST, SEARCH_PHOTOS_REQUEST, GET_PHOTO_REQUEST } from './constants';
import {
  fetchPhotosSuccess,
  fetchPhotosFail,
  searchPhotosSuccess,
  searchPhotosFail,
  getPhotoSuccess,
  getPhotoFail
} from './actions';
import {
  listPhotos as mockListPhotos,
  searchPhotos as  mockSearchPhotos,
  getPhoto as mockGetPhoto
} from 'utils/mockApis';
import {
  listPhotos as unsplashListPhotos,
  searchPhotos as unsplashSearchPhotos,
  getPhoto as unsplashGetPhoto
} from 'utils/unsplashApis';

function* fetchPhotos(action) {
  const liveApis = yield select((state) => state.app.liveApis);
  const { response, error } = liveApis ?
    yield call(unsplashListPhotos, 1, 15, 'latest') :
    yield call(mockListPhotos, 1, 15, 'latest');

  if (response) {
    yield put(fetchPhotosSuccess(response));
  } else {
    yield put(fetchPhotosFail(error));
  }
}

function* searchPhotos(action) {
  const liveApis = yield select((state) => state.app.liveApis);
  const { response, error } = liveApis ?
    yield call(unsplashSearchPhotos, action.payload, [], 1, 15) :
    yield call(mockSearchPhotos, action.payload, [], 1, 15);

  if (response) {
    yield put(searchPhotosSuccess(response));
  } else {
    yield put(searchPhotosFail(error));
  }
}

function* getPhoto(action) {
  const liveApis = yield select((state) => state.app.liveApis);
  const { response, error } = liveApis ?
    yield call(unsplashGetPhoto, action.payload) :
    yield call(mockGetPhoto, action.payload);

  if (response) {
    yield put(getPhotoSuccess(response));
  } else {
    yield put(getPhotoFail(error));
  }
}

function* photoSaga() {
  yield takeLatest(FETCH_PHOTOS_REQUEST, fetchPhotos);
  yield takeLatest(SEARCH_PHOTOS_REQUEST, searchPhotos);
  yield takeLatest(GET_PHOTO_REQUEST, getPhoto);
}

export default photoSaga;
