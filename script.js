const crossIcon = document.getElementById('cross-icon');
const menuicon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');
const portfolio = document.getElementById('portfolio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const seeproject1 = document.getElementById('see-project1');
const seeproject2 = document.getElementById('see-project2');
const seeproject3 = document.getElementById('see-project3');
const seeproject4 = document.getElementById('see-project4');

const modal = document.getElementById('modal');
const modulecontainer = document.getElementById('module-container');
const crosspopup = document.getElementById('cross-popup');

menuicon.addEventListener('click', () => {
  menuList.style.display = 'flex';
});
crossIcon.addEventListener('click', () => {
  menuList.style.display = 'none';
});

portfolio.addEventListener('click', () => {
  menuList.style.display = 'none';
});

about.addEventListener('click', () => {
  menuList.style.display = 'none';
});

contact.addEventListener('click', () => {
  menuList.style.display = 'none';
});

seeproject1.addEventListener('click', () => {
  modal.style.display = 'flex';
  modulecontainer.style.display = 'unset';
});

seeproject2.addEventListener('click', () => {
  modal.style.display = 'flex';
  modulecontainer.style.display = 'unset';
});

seeproject3.addEventListener('click', () => {
  modal.style.display = 'flex';
  modulecontainer.style.display = 'unset';
});

seeproject4.addEventListener('click', () => {
  modal.style.display = 'flex';
  modulecontainer.style.display = 'unset';
});

crosspopup.addEventListener('click', () => {
  modal.style.display = 'none';
  modulecontainer.style.display = 'none';
});