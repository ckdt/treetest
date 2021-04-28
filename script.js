const sideBar = document.querySelector('.sidebar');
const breadCrumbList = document.querySelector('.bc-panel');
const sbToggle = document.querySelectorAll('.js-sbbutton');
const searchField = document.getElementById('search');
let isOpen = false;
let curoShowing = true;
let gcShowing = true;
let gcnlShowing = true;
let gceduShowing = true;

sbToggle.forEach(el =>
  el.addEventListener('click', e => {
    toggleSidebar();
  })
);

function toggleSidebar() {
  // open Sidebar
  sideBar.classList.toggle('is-open');
  // move Breadcrumb
  breadCrumbList.classList.toggle('is-moved');
  // set isOpen Boolean
  isOpen = !isOpen;
  // focus on search
  if (isOpen) {
    searchField.focus();
  } else {
    searchField.blur();
  }
}

const curoToggle = document.querySelector('.js-curo .icon');
curoToggle.addEventListener('click', e => {
  toggleCuro();
});

function toggleCuro() {
  const main = document.querySelector('.js-curo');
  const items = document.querySelectorAll('.d-1');
  // highlight main element
  main.classList.toggle('is-open');
  // show items
  items.forEach(el => el.classList.toggle('is-showing'));
  // set isOpen Boolean
  curoShowing = !curoShowing;
}

const gcToggle = document.querySelector('.js-gc .icon');
gcToggle.addEventListener('click', e => {
  toggleGc();
});

function toggleGc() {
  const main = document.querySelector('.js-gc');
  const items = document.querySelectorAll('.d-2');
  // highlight main element
  main.classList.toggle('is-open');
  // show items
  items.forEach(el => el.classList.toggle('is-showing'));
  // set isOpen Boolean
  gcShowing = !gcShowing;
}

const gcnlToggle = document.querySelector('.js-gcnl .icon');
gcnlToggle.addEventListener('click', e => {
  toggleGcnl();
});

function toggleGcnl() {
  const main = document.querySelector('.js-gcnl');
  const items = document.querySelectorAll('.d-3');
  // highlight main element
  main.classList.toggle('is-open');
  // show items
  items.forEach(el => el.classList.toggle('is-showing'));
  // set isOpen Boolean
  gcnlShowing = !gcnlShowing;
}

const gceduToggle = document.querySelector('.js-gcedu .icon');
gceduToggle.addEventListener('click', e => {
  toggleGcedu();
});

function toggleGcedu() {
  const main = document.querySelector('.js-gcedu');
  const items = document.querySelectorAll('.d-4');
  // highlight main element
  main.classList.toggle('is-open');
  // show items
  items.forEach(el => el.classList.toggle('is-showing'));
  // set isOpen Boolean
  gceduShowing = !gceduShowing;
}

const gctudelftToggle = document.querySelector('.js-gctudelft');
gctudelftToggle.addEventListener('click', e => {
  toggleGctudelft();
});

function toggleGctudelft() {
  toggleSidebar();
}
