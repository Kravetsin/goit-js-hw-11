'use strict';

import createGallery, {
  hideLoader,
  showLoader,
} from './js/render-functions.js';
import getImagesByQuery from './js/pixabay-api.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = form.elements['search-text'].value.trim();
  if (!query) return;

  gallery.innerHTML = '';
  showLoader();

  getImagesByQuery(query).then(images => {
    if (!images || images.length === 0) {
      hideLoader();
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    const items = images.map(img => ({
      previewURL: img.webformatURL,
      largeImageURL: img.largeImageURL,
      description: img.tags,
      likes: img.likes,
      views: img.views,
      comments: img.comments,
      downloads: img.downloads,
    }));

    createGallery(gallery, items);
  });
});
