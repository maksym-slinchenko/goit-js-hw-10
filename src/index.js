import './styles.css';
import menuAr from './menu.json';
import cardCreater from './templates/menu-meal.hbs';

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

const menuEl = document.querySelector('.js-menu');
const themeSwitcherEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');

menuEl.insertAdjacentHTML('beforeend', cardCreater(menuAr));
// -----------
const addLightTheme = () => {
  bodyEl.classList.add('light-theme');
  bodyEl.classList.remove('dark-theme');
};

const addDarkTheme = () => {
  bodyEl.classList.add('dark-theme');
  bodyEl.classList.remove('light-theme');
};

const setLightToLocalSt = () => {
  localStorage.setItem('LIGHT', 'light-theme');
  localStorage.removeItem('DARK');
};

const setDarkToLocalSt = () => {
  localStorage.setItem('DARK', 'dark-theme');
  localStorage.removeItem('LIGHT');
};
// -------------
const setStartTheme = () => {
  if (Object.keys(localStorage).includes('DARK')) {
    addDarkTheme();
    themeSwitcherEl.checked = true;
  } else {
    addLightTheme();
    themeSwitcherEl.checked = false;
  }
};
setStartTheme(bodyEl);

const changingTheme = () => {
  if (themeSwitcherEl.checked === false) {
    addLightTheme();
    setLightToLocalSt();
  } else {
    addDarkTheme();
    setDarkToLocalSt();
  }
};

themeSwitcherEl.addEventListener('change', changingTheme);
