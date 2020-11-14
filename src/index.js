import './styles.css';
import menuAr from './menu.json';
import cardCreater from './templates/menu-meal.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const menuEl = document.querySelector('.js-menu');
const themeSwitcherEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');

menuEl.insertAdjacentHTML('beforeend', cardCreater(menuAr));
// -----------
const addTheme = (addedTheme, removedTheme) => {
  bodyEl.classList.add(addedTheme);
  bodyEl.classList.remove(removedTheme);
};

const setThemeToLocalSt = (themeObject, indexSetTheme, indexRemovedTheme) => {
  localStorage.setItem(
    Object.keys(themeObject)[indexSetTheme],
    Object.values(themeObject)[indexSetTheme],
  );
  localStorage.removeItem(Object.keys(themeObject)[indexRemovedTheme]);
};

// const setDarkToLocalSt = () => {
//   localStorage.setItem('DARK', 'dark-theme');
//   localStorage.removeItem('LIGHT');
// };
// -------------
const setStartTheme = () => {
  if (Object.keys(localStorage).includes(Object.keys(Theme)[1])) {
    addTheme(DARK, LIGHT);
    themeSwitcherEl.checked = true;
  } else {
    addTheme(LIGHT, DARK);
    themeSwitcherEl.checked = false;
  }
};
setStartTheme(bodyEl);

const changingTheme = () => {
  if (themeSwitcherEl.checked === false) {
    addTheme(LIGHT, DARK);
    setThemeToLocalSt(Theme, 0, 1);
  } else {
    addTheme(DARK, LIGHT);
    setThemeToLocalSt(Theme, 1, 0);
  }
};

themeSwitcherEl.addEventListener('change', changingTheme);
