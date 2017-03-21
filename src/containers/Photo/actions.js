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

export function fetchPhotos() {
  return {
    type: FETCH_PHOTOS_REQUEST,
  };
}

export function fetchPhotosSuccess(payload) {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    payload,
  };
}

export function fetchPhotosFail(error) {
  return {
    type: FETCH_PHOTOS_FAIL,
    error,
  };
}

export function searchPhotos(payload) {
  return {
    type: SEARCH_PHOTOS_REQUEST,
    payload
  };
}

export function searchPhotosSuccess(payload) {
  return {
    type: SEARCH_PHOTOS_SUCCESS,
    payload,
  };
}

export function searchPhotosFail(error) {
  return {
    type: SEARCH_PHOTOS_FAIL,
    error,
  };
}

export function getPhoto(payload) {
  return {
    type: GET_PHOTO_REQUEST,
    payload
  };
}

export function getPhotoSuccess(payload) {
  return {
    type: GET_PHOTO_SUCCESS,
    payload,
  };
}

export function getPhotoFail(error) {
  return {
    type: GET_PHOTO_FAIL,
    error,
  };
}