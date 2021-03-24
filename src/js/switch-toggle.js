const bodyEl = document.querySelector('body');
const toogleEl = document.querySelector('#theme-switch-toggle');

toogleEl.addEventListener('change', themeSwitch);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function themeSwitch(evt) {
  if (evt.target.checked) {
    bodyEl.classList.add(Theme.DARK),
      bodyEl.classList.remove(Theme.LIGHT),
      localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyEl.classList.add(Theme.LIGHT),
      bodyEl.classList.remove(Theme.DARK),
      localStorage.setItem('theme', Theme.LIGHT);
  }
}

if (localStorage.getItem('theme') === Theme.DARK) {
  toogleEl.checked = true;
  bodyEl.classList.add(Theme.DARK);
}
