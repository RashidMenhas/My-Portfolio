const crossIcon = document.getElementById('cross-icon');
const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');
const portfolio = document.getElementById('portfolio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

menuIcon.addEventListener('click', () => {
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