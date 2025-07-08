'use strict';

import axios from 'axios';
import getImagesByQuery from './js/pixabay-api';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = form.elements['search-text'].value;
  console.log(query);
  getImagesByQuery(query);
});
