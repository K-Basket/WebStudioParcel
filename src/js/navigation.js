const navigationEl = document.querySelector('.js-navigation');
const portfolioEl = document.querySelector('.js-portfolio');
const studioEl = document.querySelectorAll('.js-studio');
const currentEl = document.querySelector('.site-nav__link--current');
const btnOpenMobile = document.querySelector('.js-open-menu');
const btnCloseMobile = document.querySelector('.js-close-menu');
const containerMenuMobile = document.querySelector('.js-menu-container');

navigationEl.addEventListener('click', onShowPage);
btnOpenMobile.addEventListener('click', onOpenMobile);
btnCloseMobile.addEventListener('click', onCloseMobile);

let activeEl = null;

function onShowPage(evt) {
  if (evt.target.nodeName !== 'A') {
    return;
  }

  showStudioPage(evt);
  showPortfolioPage(evt);

  currentEl.classList.remove('site-nav__link--current');

  if (activeEl) {
    activeEl.classList.remove('site-nav__link--current');
  }

  activeEl = evt.target;

  evt.target.classList.add('site-nav__link--current');
}

function onOpenMobile() {
  containerMenuMobile.classList.add('is-open');
}

function onCloseMobile() {
  containerMenuMobile.classList.remove('is-open');
}

function showStudioPage(evt) {
  if (evt.target.textContent === 'Студія') {
    portfolioEl.classList.add('visually-hidden');

    studioEl.forEach(el => el.classList.remove('visually-hidden'));

    onCloseMobile();
  }
  return;
}

function showPortfolioPage(evt) {
  if (evt.target.textContent === 'Портфоліо') {
    portfolioEl.classList.remove('visually-hidden');

    studioEl.forEach(el => el.classList.add('visually-hidden'));

    onCloseMobile();
  }
  return;
}
