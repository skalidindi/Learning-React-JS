import ES6Promise from 'es6-promise';
import 'isomorphic-fetch';
ES6Promise.polyfill();

const rootUrl = 'https://api.imgur.com/3/';
const apiKey = 'ddc1644e9e929cd';

export default {
  get: (url) => fetch(rootUrl + url, {
    headers: {
      Authorization: `Client-ID ${apiKey}`,
    },
  })
  .then((response) => response.json()),
};
