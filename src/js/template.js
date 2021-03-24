import menu from '../menu.json';
import template from '../template/card.hbs';

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', template(menu));
