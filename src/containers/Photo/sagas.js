import { takeLatest, call, put, select } from 'redux-saga/effects';

import { FETCH_PHOTOS_REQUEST, SEARCH_PHOTOS_REQUEST } from './constants';
import {
  fetchPhotosSuccess,
  fetchPhotosFail,
  searchPhotosSuccess,
  searchPhotosFail
} from './actions';
import {
  listPhotos as mockListPhotos,
  searchPhotos as  mockSearchPhotos
} from 'utils/mockApis';
import {
  listPhotos as unsplashListPhotos,
  searchPhotos as unsplashSearchPhotos
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

function* photoSaga() {
  yield takeLatest(FETCH_PHOTOS_REQUEST, fetchPhotos);
  yield takeLatest(SEARCH_PHOTOS_REQUEST, searchPhotos);
}

export default photoSaga;
