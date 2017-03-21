import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "78af4955e5dbe0c6a709f8e40a3af19b2f86c0c07a158a02fff6b33eb8b916e3",
  secret: "681c93eaffbdddea0f921ef70da4e6a6a39061ff7edcab3700131abfcb11be16"
});

function parseJSON(response) {
  return response.json();
}

export function listPhotos(page, perPage, orderBy) {
  return unsplash.photos.listPhotos(page, perPage, orderBy)
    .then(parseJSON)
    .then(response => ({ response }))
    .catch(error => ({ error }))
};

export function searchPhotos(query, category, page, perPage) {
  return unsplash.photos.searchPhotos(query, category, page, perPage)
    .then(parseJSON)
    .then(response => ({ response }))
    .catch(error => ({ error }))
};

export function getPhoto(id, width, height, rectangle) {
  return unsplash.photos.getPhoto(id, width, height, rectangle)
    .then(parseJSON)
    .then(response => ({ response }))
    .catch(error => ({ error }))
};