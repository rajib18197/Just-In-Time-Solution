/////////////////////////////////////////
///////////////// Tabs Components
const tabs = document.querySelectorAll('.side-nav__list');
const tabContainer = document.querySelector('.side-nav__lists');
const tabContent = document.querySelectorAll('.main-content');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.side-nav__list');
  // Guard Clause
  if (!clicked) return;
  tabs.forEach(tab => tab.classList.remove('side-nav__list--active'));
  tabContent.forEach(t => t.classList.remove('main-content__active'));
  document
    .querySelector(`.side-nav__list-${clicked.dataset.tab}`)
    .classList.add('side-nav__list--active');
  document
    .querySelector(`.main-content--${clicked.dataset.tab}`)
    .classList.add('main-content__active');
});
