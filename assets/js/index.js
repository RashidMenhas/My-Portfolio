// Mobile Nav Toggle
const mobileBtn = document.querySelector(".mobile-toggle-btn");
const headerNav = document.querySelector(".header");
const navLink = document.querySelectorAll(".link-nav");
const profilePic = document.querySelector(".profile-pic");

mobileBtn.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  profilePic.classList.toggle("hide-profile");
});

[].forEach.call(navLink, (element) => {
  element.onclick = () => {
    headerNav.classList.remove("active");
  };
});

// Implement Dynamic Functionality for cards and modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const gridItems = document.getElementById("grid");

  // Create a new object
  const mainCardDetails = {
    title: "Leaderboard",
    desc: "In this activity I will set up a JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules. I have develop a first working version of the app following a wireframe, but without styling - just focus on functionality. In following activities, I will consume the Leaderboard API using JavaScript async and await…",
    languages: ["Html", "Css", "JavaScript", "ReactJS"],
    live: "https://sami-leader-board.netlify.app/",
    source: "https://github.com/RashidMenhas/Leaderboard",
    img: "./assets/project-img/leaderboard.gif",
  };

  const {
    title, desc, languages, live, source, img,
  } = mainCardDetails;
  // Get all data from languages array in side mainCardDetails object
  const languagesArr = languages
    .map((language) => `<li>${language}</li>`)
    .join("");

  // Add dynamic data in main card
  let mainCardData = "";
  mainCardData += `
                  <h1 class='work-main-heading'>My Recent Works</h1>
                  <hr class='divider' />
                  <div class='main-card' id='main'>
                    <img src=${img} class='post-image'/>
                    <div class='main-card-content'>
                      <h4 class='work-title-post'>${title}</h4>
                      <p class='work-supporting-text'>
                      ${desc.slice(0, 100)} ...
                      </p>
                      <ul class='languages-list'>
                        ${languagesArr}
                      </ul>
                      <div class='btn-left'>
                        <button class='btn-primary btn' onclick='mainModal()'>See Project</button>
                      </div>
                    </div>
                  </div>
  `;

  // Create new array of objects
  const cardDetails = [
    {
      id: 1,
      title: 'Space Travellers Hub',
      img: './assets/project-img/rocket.gif',
      desc: 'By building this web application, we aim to create an engaging platform that ignites users curiosity and enthusiasm for space exploration. Whether they are interested in commercial space tourism or contributing to scientific missions, our application will cater to their needs, making the process of booking rockets and joining space missions an exciting and seamless experience.',
      languages: ['React.js', 'Webpack', 'HTML5', 'CSS3', 'JavaScript'],
      live: 'https://space-travel-hubs.netlify.app/',
      source: 'https://github.com/RashidMenhas/Space-Traveller-s-Hub',
    },
    {
      id: 2,
      title: 'BOOKS STORE',
      img: './assets/project-img/books-store.png',
      desc: 'Bookstore React Project - Discover, Explore, and Shop Books with Ease Explore a world of books with our Bookstore React Project. This user-friendly web application offers a seamless and immersive experience for book lovers. Discover an extensive collection of books across various genres, including bestsellers, classics, fiction, and non-fiction.',
      languages: ['React', 'Redux', 'javascript','HTML5'],
      live: 'https://subtle-brigadeiros-d2870f.netlify.app/',
      source: 'https://github.com/RashidMenhas/books-store',
    },
    
    {
      id: 3,
      title: 'MY BUDGET APP',
      img: './assets/project-img/My budget.gif',
      desc: 'Budget App is a web application that allows users to track their expenses and income. Users can add their income and expenses, and the app will calculate the balance. Built with Ruby on rails and Bootstrap.',
      languages: ['Ruby','OnRails', 'PostgreSQL', 'Tailwind'],
      live: 'https://ror-capstone.onrender.com',
      source: 'https://github.com/RashidMenhas/ROR-Capstone',
    },
    {
      id: 4,
      title: 'Delicious Meals',
      img: './assets/project-img/delecious-meal.png',
      desc: 'A meal web app that retrieves data from an API could provide users with access to a vast library of recipes and nutritional information. Users can browse through the recipes, filter them based on their dietary requirements, or search for specific ingredients. The app can also provide a video link to show users how the meal is prepared step-by-step',
      languages: ['CSS', 'HTML', 'SCSS', 'Webpack', 'JavaScript'],
      live: 'https://osoro254alex.github.io/Delicious-Meals/',
      source: 'https://github.com/RashidMenhas/Delicious-Meals',
    },
    {
      id: 5,
      title: 'TO DO LIST',
      img: './assets/project-img/book_store.jpg',
      desc: 'In this project, We build a to do list minimalist website that allows users to create and modify a to do list with CRUD functionality. Built with Javascript as well as basic HTML and CSS. Also Javascript files were divided into modules and ES6 syntax was used.',
      languages: ['CSS', 'HTML', 'React', 'Redux', 'JavaScript'],
      live: 'https://subtle-brigadeiros-d2870f.netlify.app',
      source: 'https://github.com/RashidMenhas/to-do-structure',
    },
    {
      id: 6,
      title: 'Math-Magicians',
      img: './assets/project-img/calculater.gif',
      desc: 'In this project, I created a  Math Magicians app. I developed the app using React components that hold the core functionality: a calculator. The primary operations are addition, subtraction, multiplication, and division. I styled the app using Bootstrap.',
      languages: ['CSS', 'HTML', 'React', 'Redux', 'JavaScript'],
      live: 'https://neon-gaufre-c1a782.netlify.app',
      source: 'https://github.com/RashidMenhas/math-magicians',
    },
  ];

  // Fetch all cards details from cardsDetails array of objects
  let cardData = "";
  cardDetails.map((card) => {
    const {
      id, img, title, desc, languages,
    } = card;
    // Fetch languages array from a languages object
    const languagesArr = languages.map((lang) => `<li>${lang}</li>`).join("");
    // Add dynamic in other cards
    cardData += `
                <div class='card-desktop' id='card-image-${id}'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn-hidden'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
                <div class='card'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
    `;
    return cardData;
  });

  // Show all data in main and other cards
  gridItems.innerHTML = mainCardData + cardData;

  // Add dynamic modal for main cards data
  mainModal = () => {
    let modalDetails = "";
    modalDetails += `
                    <div class='modal'>
                      <div class='modal-header'>
                        <h1>${title}</h1>
                        <ion-icon name='close' class='modal-close-icon'></ion-icon>
                      </div>
                      <ul class='modal-languages-list'>
                        ${languages.map((lang) => `<li>${lang}</li>`).join("")}
                      </ul>
                      <div class='modal-content'>
                        <div class='modal-image-mobile'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <div class='modal-image-desktop'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <p class='title'>${desc}</p>
                      </div>
                      <div class='buttons'>
                        <a href='${live}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./assets/images/Icon-Export.svg'
                                  alt='live-icon'
                                  class='icon-right'
                                  height='18'/>
                            </span>
                        </a>
                        <a href='${source}' class='btn-primary' target='_blank'>
                          See Source
                          <span>
                          <img  src='./assets/images/Icon-GitHub.svg'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                        </a>
                      </div>
                    </div>
  `;

    // Show Data in modal
    modal.innerHTML = modalDetails;

    // Open modal
    modal.style.display = "block";

    // Close modal
    const closeModal = document.getElementsByClassName("modal-close-icon")[0];
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  // Add dynamic modal details for other cards
  otherModal = (id) => {
    const data = cardDetails.find((card) => card.id === id);
    let modalData = "";
    modalData += `
                  <div class='modal'>
                    <div class='modal-header'>
                      <h1>${data.title}</h1>
                      <ion-icon name='close' class='modal-close-icon'></ion-icon>
                    </div>
                    <ul class='modal-languages-list'>
                      ${data.languages
    .map((lang) => `<li>${lang}</li>`)
    .join("")}
                    </ul>
                    <div class='modal-content'>
                      <div class='modal-image-mobile'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <div class='modal-image-desktop'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <p class='title'>${data.desc}</p>
                    </div>
                    <div class='buttons'>
                      <a href='${data.live
}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./assets/images/Icon-Export.svg'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                      </a>
                      <a href='${data.source
}' class='btn-primary' target='_blank'>
                        See Source
                        <span>
                          <img  src='./assets/images/Icon-GitHub.svg'
                              alt='live-icon'
                              class='icon-right'
                              height='18'/>
                        </span>
                      </a>
                    </div>
                  </div>
    `;

    // Show Data in modal
    modal.innerHTML = modalData;

    // Open modal
    modal.style.display = "block";

    // Close modal
    const closeModal = document.getElementsByClassName("modal-close-icon")[0];
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  // When user clicks out side of the modal, close the modal.
  document.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  new Typed(".auto-change", {
    strings: [
      "Web Developer",
      "Full Stack Developer",
      "Android Developer",
      "Front-end Developer",
      "React Developer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
});

// Form Validation
const email = document.getElementById("email");
const fullName = document.getElementById("fullName");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const alert = document.getElementById("alert-danger");

const submitForm = (e) => {
  e.preventDefault();
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
  const emailValue = email.value;
  const nameValue = fullName.value;
  const messageValue = message.value;

  const showAlert = (message) => {
    alert.classList.add("show-alert");
    if (message === "Message sent successfully!") {
      alert.innerHTML = `<span> <ion-icon name="checkmark" class="alert-icon"></ion-icon> </span> ${message}`;
    } else {
      alert.innerHTML = `<span> <ion-icon name="close-circle" class="alert-icon"></ion-icon> </span> ${message}`;
    }
    setTimeout(() => {
      alert.classList.remove("show-alert");
      alert.classList.remove("alert-success");
    }, 2500);
  };

  if (!nameValue || !emailValue || !messageValue) {
    showAlert("Please enter all required fields");
    return;
  }

  if (emailValue !== emailValue.toLowerCase()) {
    showAlert("Please enter lowercase letters.");
    return;
  }

  if (!regex.test(emailValue)) {
    showAlert("Invalid email address!");
    return;
  }

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "samiullahk997@gmail.com",
    Password: "A5A65B90E0968D55A54B842273F5EAB8770F",
    To: "samiullahk997@gmail.com",
    From: "samiullahk997@gmail.com",
    Subject: "Contact Information",
    Body: `Name: ${nameValue} <br/> Email: ${emailValue} <br/> Message: ${messageValue}`,
  }).then((msg) => {
    if (msg === "OK") {
      alert.classList.add("show-alert");
      alert.classList.add("alert-success");
      showAlert("Message sent successfully!");
    }
    email.value = "";
    fullName.value = "";
    message.value = "";
    localStorage.removeItem("user");
  });
};

submit.addEventListener("click", submitForm);

// Store data in localStorage
const reset = document.getElementById("reset");

changeHandler = () => {
  const field = {
    name: fullName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem("user", JSON.stringify(field));
};

if (localStorage.getItem("user") === null) {
  email.value = "";
  fullName.value = "";
  message.value = "";
} else {
  const user = JSON.parse(localStorage.getItem("user"));
  email.value = user.email;
  fullName.value = user.name;
  message.value = user.message;
}

const resetFrom = (e) => {
  e.preventDefault();
  email.value = "";
  fullName.value = "";
  message.value = "";
  localStorage.removeItem("user");
};

reset.addEventListener("click", resetFrom);

// Select all the sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Add an event listener to the window that listens for a scroll event
document.addEventListener("scroll", () => {
  // Get the current position of the window
  const currentPosition = window.scrollY + 80;
  // Loop through all the sections
  sections.forEach((section) => {
    // Check if the current position is within the section
    if (
      section.offsetTop <= currentPosition
      && section.offsetTop + section.offsetHeight > currentPosition
    ) {
      // Loop through all the nav links
      navLinks.forEach((link) => {
        // Remove the active class from all the nav links
        link.classList.remove("nav-active");
        // Check if the section id is the same as the nav link href
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          // Add the active class to the nav link
          link.classList.add("nav-active");
        }
      });
    }
  });
});
