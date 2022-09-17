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
  title: 'Tonic',
  desc: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
  imgScr: 'images/card.png',
  cardTechs: ['html', 'css', 'javascript'],
  source: '#',
  live: '#',
},
{
  cardId: 2,
  title: 'Tonic',
  desc: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
  imgScr: 'images/cardimg2.png',
  cardTechs: ['html', 'css', 'javascript'],
  source: '#',
  live: '#',
},
{
  cardId: 3,
  title: 'Tonic',
  desc: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
  imgScr: 'images/cardimg3.png',
  cardTechs: ['html', 'css', 'javascript'],
  source: '#',
  live: '#',
},
{
  cardId: 4,
  title: 'Tonic',
  desc: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
  imgScr: 'images/cardimg5.png',
  cardTechs: ['html', 'css', 'javascript'],
  source: '#',
  live: '#',
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
                    <button class="live" type="button">See live <img class="liveicon" src="images/live.svg" alt="">
                    </button>
                    <button class="source" type="button">See source <img class="sourceicon" src="images/source.svg"
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
      modal.remove();
    });
  });
});
