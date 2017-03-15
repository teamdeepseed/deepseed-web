import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FETCH_PHOTOS_REQUEST } from './constants';
import {
  fetchPhotosSuccess,
  fetchPhotosFail
} from './actions';
import { listPhotos } from 'utils/unsplashApis';

function* fetchPhotos(action) {
  const { response, error } = yield call(listPhotos, 1, 15, 'latest');

  if (response) {
    yield put(fetchPhotosSuccess(response));
  } else {
    yield put(fetchPhotosFail(error));
  }
}

function* photoSaga() {
  yield takeLatest(FETCH_PHOTOS_REQUEST, fetchPhotos);
}

export default photoSaga;

