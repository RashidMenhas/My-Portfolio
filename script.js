const crossIcon = document.getElementById('cross-icon');
const menuicon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');
menuicon.addEventListener('click', () => {
  menuList.style.display = 'flex';
});
crossIcon.addEventListener('click', () => {
  menuList.style.display = 'none';
});

// Projects
const cards = [{
  cardId: 1,
  title: 'LEADERBOARD',
  desc: 'I will set up a JavaScript project for the Leaderboard list app, using webpack and ES6 features.',
  imgScr: 'images/upload.gif',
  cardTechs: ['html', 'css', 'javascript','Reactjs'],
  source: 'https://github.com/RashidMenhas/Leaderboard',
  live: 'https://sami-leader-board.netlify.app/',
},
{
  cardId: 2,
  title: 'BOOKS STORE',
  desc: 'Bookstore React Project - Discover, Explore, and Shop Books with Ease Explore a world of books with our Bookstore React Project. This user-friendly web application offers a seamless and immersive experience for book lovers. Discover an extensive collection of books across various genres, including bestsellers, classics, fiction, and non-fiction.',
  imgScr: 'images/books-store.png',
  cardTechs: ['React', 'Redux', 'javascript','HTML5'],
  source: 'https://github.com/RashidMenhas/books-store',
  live: 'https://subtle-brigadeiros-d2870f.netlify.app/',
},
{
  cardId: 3,
  title: 'MY BUDGET APP',
  desc: 'The Ruby on Rails capstone project is about building a mobile web application where you can manage your budget.A list of transactions associated with a category, so that you can see how much money you spent and on what.BudgetTracker is a robust and user-friendly Ruby on Rails web application that empowers you to take control of your finances and achieve your financial goals with ease.',
  imgScr: 'images/My budget.gif',
  cardTechs: ['Ruby','OnRails', 'PostgreSQL', 'Tailwind'],
  source: 'https://github.com/RashidMenhas/ROR-Capstone',
  live: 'https://ror-capstone.onrender.com',
},
{
  cardId: 4,
  title: 'Space Travellers Hub',
  desc: 'By building this web application, we aim to create an engaging platform that ignites users curiosity and enthusiasm for space exploration. Whether they are interested in commercial space tourism or contributing to scientific missions, our application will cater to their needs, making the process of booking rockets and joining space missions an exciting and seamless experience.',
  imgScr: 'images/rocket.gif',
  cardTechs: ['React.js', 'Webpack', 'HTML5', 'CSS3'],
  source: 'https://github.com/RashidMenhas/Space-Traveller-s-Hub',
  live: 'https://space-travel-hubs.netlify.app/',
},
{
  cardId: 5,
  title: 'Delicious Meals',
  desc: 'A meal web app that retrieves data from an API could provide users with access to a vast library of recipes and nutritional information. Users can browse through the recipes, filter them based on their dietary requirements, or search for specific ingredients. The app can also provide a video link to show users how the meal is prepared step-by-step',
  imgScr: 'images/delecious-meal.png',
  cardTechs: ['CSS', 'HTML', 'SCSS', 'Webpack', 'JavaScript'],
  source: 'https://github.com/RashidMenhas/Delicious-Meals',
  live: 'https://osoro254alex.github.io/Delicious-Meals/',
},
];

// Dynamic Card Section
let cardSection = '';
cards.forEach((card) => {
  cardSection += `<div class="card">
          <div class="card-heading">
              <img src="${card.imgScr}" alt="card">
          </div>
          <div class="card-center">
              <div class="card-body">
                  <h1 class="card-title">${card.title}</h1>
                  <ul class="card-author">
                      <li class="heading5">CANOPY</li>
                      <li class="dot"></li>
                      <li class="author-details">Back End Dev</li>
                      <li class="dot"></li>
                      <li class="author-details">2015</li>
                  </ul>
                  <p class="card-description">${card.desc}</p>
              </div>
              <ul class="card-languages">
                   <li class="language-item ">${card.cardTechs[0]}</li>
                   <li class="language-item ">${card.cardTechs[1]}</li>
                   <li class="language-item ">${card.cardTechs[2]}</li>
                   <li class="language-item ">${card.cardTechs[3]}</li>
              </ul>
                  <button id="see-project1" class="see-project btn-card-one" type="button">
                      See Project
                  </button>
          </div>
      </div>`;
});
document.getElementsByClassName('card-section')[0].insertAdjacentHTML('afterbegin', cardSection);

// Dynamic Modal
let modal = '';
const projectBtn = document.getElementsByClassName('see-project');
[...projectBtn].forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modal += `<div id="modal" class="modal">
    <div id="popup-card" class="popup-card">
        <div class="popup-heading">
            <p class="popup-title">${cards[index].title}</p>
            <i id="cross-popup" class="cross-popup fa-solid fa-x"></i>
        </div>
        <div class="popup-auther">
            <ul>
                <li class="canopy">CANOPY</li>
                <li class="dot"></li>
                <li class="BED">Back End Dev</li>
                <li class="dot"></li>
                <li class="year">2015</li>
            </ul>
            <img class="popup-img" src="${cards[index].imgScr}" alt="">
        </div>
        <div class="p-language">
            <p class="pragraph">${cards[index].desc}</p>
            <div class="popup-languages">
                <ul class="languages-first">
                    <li class="language-item">${cards[index].cardTechs[0]}</li>
                    <li class="language-item">${cards[index].cardTechs[1]}</li>
                    <li class="language-item">${cards[index].cardTechs[2]}</li>
                </ul>
                <div class="hr"></div>
                <div class="popup-btns">
                    <button class="live" type="button"><a href="${cards[index].live}" target="_blank">See live</a> <img class="liveicon" src="images/live.svg" alt="">
                    </button>
                    <button class="source" type="button"><a href="${cards[index].source}" target="_blank">See Source</a> <img class="sourceicon" src="images/source.svg"
                                                                         alt=""></button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="module-container" class="module-container"></div>`;
    document.body.insertAdjacentHTML('beforeend', modal);
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('module-container').style.display = 'flex';
    const modalCross = document.getElementById('cross-popup');
    modalCross.addEventListener('click', () => {
      document.getElementById('modal').style.display = 'none';
      document.getElementById('module-container').style.display = 'none';
      window.location.reload();
    });
  });
});

// Email Validation
const submit = document.getElementById('form');
submit.addEventListener('submit', (e) => {
  const email = document.getElementById('email').value;
  const lowerCaseEmail = document.getElementById('email').value.toLowerCase();
  const error = document.getElementById('error-msg');
  const msg = document.createTextNode('Email should be in lower-case.');
  if (lowerCaseEmail !== email) {
    error.append(msg);
    e.preventDefault();
  }
});