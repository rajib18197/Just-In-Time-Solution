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
// user profile
const usertabs = document.querySelectorAll('.options__tab');
const userTabContainer = document.querySelector('.options__tab-container');
const userTabContent = document.querySelectorAll('.options__content');

userTabContainer.addEventListener('click', function (e) {
  const clicked1 = e.target.closest('.options__tab');
  console.log(clicked1);

  if (!clicked1) return;
  //remove
  usertabs.forEach(tab => tab.classList.remove('options__tab--active'));
  userTabContent.forEach(content =>
    content.classList.remove('options__content--active')
  );
  document
    .querySelector(`.options__tab--${clicked1.dataset.tab}`)
    .classList.add('options__tab--active');
  document
    .querySelector(`.options__content--${clicked1.dataset.tab}`)
    .classList.add('options__content--active');
});

//
const profile = document.querySelector('.navigation__profile');

profile.addEventListener('click', function () {
  //tabs.forEach(tabslist => tabslist.classList.remove('side-nav__list'));
  tabContent.forEach(content =>
    content.classList.remove('main-content__active')
  );
  document
    .querySelector('.main-content--4')
    .classList.add('main-content__active');
});

// modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn--close-modal');
const askQuestion = document.querySelector('.btn');

const openModal = function (e) {
  e.preventDefault();
  //modal.classList.add('show-modal');
  //overlay.classList.add('open-overlay');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  //modal.classList.remove('show-modal');
  //overlay.classList.remove('open-overlay');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
askQuestion.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // if (e.key === 'Escape' && modal.classList.contains('show-modal')) {
  //   closeModal();
  // }
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
