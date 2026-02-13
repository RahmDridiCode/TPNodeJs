// main.js
import { tab, element } from './data.js';
import { searchElement } from './searchElement.js';

searchElement(tab, element, (message) => {
    console.log(message);
});
