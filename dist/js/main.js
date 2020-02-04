// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const cardForFlip = document.getElementsByClassName("flip-card-inner");

// Set Initial State Of Menu
let showMenu = false;

// Set Initial State Of Card Flip Animation
let isCardFlipped = false;

const flipCard = function() {
  if (!isCardFlipped) {
    this.style.transform = "rotateY(180deg)";
    isCardFlipped = true;
  } else {
    this.style.transform = "rotateY(0)";
    isCardFlipped = false;
  }
};

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
};
// console.log(cardBackside);
menuBtn.addEventListener("click", toggleMenu);
for (let i = 0; i < cardForFlip.length; i++) {
  cardForFlip[i].addEventListener("click", flipCard);
}
