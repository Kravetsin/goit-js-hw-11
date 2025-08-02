import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

const loader = document.querySelector('.loader');

export function showLoader() {
  if (loader) {
    loader.classList.remove('hidden');
  }
}

export function hideLoader() {
  if (loader) {
    loader.classList.add('hidden');
  }
}

function createGallery(container, items) {
  const fragment = document.createDocumentFragment();

  items.forEach(
    ({
      previewURL,
      largeImageURL,
      description,
      likes,
      views,
      comments,
      downloads,
    }) => {
      const li = document.createElement('li');
      li.classList.add('gallery__item');

      const link = document.createElement('a');
      link.classList.add('gallery__link');
      link.href = largeImageURL;

      const img = document.createElement('img');
      img.classList.add('gallery__image');
      img.src = previewURL;
      img.alt = description;

      const infoBox = document.createElement('div');
      infoBox.classList.add('image__info');
      infoBox.innerHTML = `
        <p><strong>Likes:</strong> ${likes}</p>
        <p><strong>Views:</strong> ${views}</p>
        <p><strong>Comments:</strong> ${comments}</p>
        <p><strong>Downloads:</strong> ${downloads}</p>
      `;

      li.appendChild(link);
      link.appendChild(img);
      li.appendChild(infoBox);

      fragment.appendChild(li);
    }
  );

  container.appendChild(fragment);

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a.gallery__link', {
      captionsData: 'alt',
      captionDelay: 250,
      close: true,
    });
  }
}

export default createGallery;
