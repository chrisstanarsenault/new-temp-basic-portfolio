// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const cardForSliding = document.querySelectorAll(".project-info-slider");
// const infoSliderButton = document.getElementsByClassName("info-slider-button");
const infoSliderButton = document.querySelectorAll(".info-slider-button");

// Set Initial State Of Menu
let showMenu = false;

// Set Initial State of Info-Card
let isCardOpen = false;

const toggleInfoSlider = i => {
  if (!isCardOpen) {
    cardForSliding[i].classList.add("project-info-slider-open");
    // console.log(cardForSliding[1]);
    isCardOpen = true;
  } else {
    cardForSliding[i].classList.remove("project-info-slider-open");
    isCardOpen = false;
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

for (let i = 0; i < infoSliderButton.length; i++) {
  infoSliderButton[i].addEventListener("click", function() {
    toggleInfoSlider(i);
  });
}

// infoSliderButton.addEventListener("click", toggleInfoSlider);
