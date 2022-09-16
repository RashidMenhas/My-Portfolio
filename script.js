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

//Projects
const cards = [{
    cardId: 1,
    title: 'Tonic',
    desc: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
    imgScr: "images/card.png",
    cardTechs: ["html", "css", "javascript"],
    source: "#",
    live: "#",
},
    {
        cardId: 2,
        title: 'Tonic',
        desc: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
        imgScr: "images/cardimg2.png",
        cardTechs: ["html", "css", "javascript"],
        source: "#",
        live: "#",
    },
    {
        cardId: 3,
        title: 'Tonic',
        desc: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
        imgScr: "images/cardimg3.png",
        cardTechs: ["html", "css", "javascript"],
        source: "#",
        live: "#",
    },
    {
        cardId: 4,
        title: 'Tonic',
        desc: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
        imgScr: "images/cardimg5.png",
        cardTechs: ["html", "css", "javascript"],
        source: "#",
        live: "#",
    }
];

//Dynamic Card Section
let cardSection = ``;
cards.forEach(card => {
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
              </ul>
                  <button id="see-project1" class="see-project btn-card-one" type="button">
                      See Project
                  </button>
          </div>
      </div>`
});
document.getElementsByClassName("card-section")[0].insertAdjacentHTML("afterbegin" , cardSection);

