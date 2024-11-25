import { menuItems } from './data.js';
import Megamenu from './Megamenu.js';

const headerNav = document.querySelector('.header__nav');

if (headerNav) {
    headerNav.innerHTML = '';
    headerNav.appendChild(Megamenu(menuItems));
}