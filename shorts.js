import { displayAllShort } from './videos.js';
import { items } from './app.js';

let shorts = items.filter((i) => {
  return i.category === 'shorts';
});

// all shorts in short page
const allShorts = document.querySelector('.short-div');
displayAllShort(allShorts, shorts);


