///////////////////////////////////////////////////////////
// Tabs Components [navigate home, question & tags page]
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
/////////////////////////////////////////////////
// User profile activity & Profile Settings
const usertabs = document.querySelectorAll('.options__tab');
const userTabContainer = document.querySelector('.options__tab-container');
const userTabContent = document.querySelectorAll('.options__content');

userTabContainer.addEventListener('click', function (e) {
  const clicked1 = e.target.closest('.options__tab');
  console.log(clicked1);
  // Guard Clause
  if (!clicked1) return;

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

///////////////////////////////////////////
// when User Clicks his/her profile
const profile = document.querySelector('.navigation__profile-user');

profile.addEventListener('click', function () {
  tabContent.forEach(content =>
    content.classList.remove('main-content__active')
  );
  document
    .querySelector('.main-content--4')
    .classList.add('main-content__active');
});

////////////////////////////////////////
// modal window for asked questions
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn--close-modal');
const askQuestion = document.querySelector('.btn');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
askQuestion.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// for testing login form
const btnSign = document.querySelector('.sign-in');
btnSign.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.section-book').classList.add('sign-in-form');
});
