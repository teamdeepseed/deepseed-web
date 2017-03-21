import photos from './photos.json';
import photo from './photo.json';
import photoResults from './photoResults.json';

const promiseWrapper = (json) => {
  return new Promise((resolve, reject) => {
  if (json) {
    setTimeout(function() { resolve(json); }, 200);
  } else {
    setTimeout(function() { reject('shit happened'); }, 200);
  }
})};

export function listPhotos(page, perPage, orderBy) {
  return promiseWrapper(photos)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function searchPhotos(query, category, page, perPage) {
  return promiseWrapper(photoResults)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function getPhoto(id, width, height, rectangle) {
  return promiseWrapper(photo)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}
