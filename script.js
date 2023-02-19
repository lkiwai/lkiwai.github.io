// nav bar hide on scroll down and show on scroll up
const navBar = document.querySelector(".nav-container")
let lastScrollY = window.scrollY;


    window.addEventListener("scroll", () => {
        // && window.screen.width > 1024 ...turns off the hide effect at that width 
        if (lastScrollY <window.scrollY && window.screen.width > 1024) {
            navBar.classList.add("nav-container-hidden")
        } else {
            navBar.classList.remove("nav-container-hidden")
        }
        lastScrollY = window.scrollY
    })

// script for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
        })
    })
})

// hamburger menu active & hover fx
const hamburgerButton = document.querySelector('.hamburger-menu');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const hamburgerClose = document.getElementById('burgerButton');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

hamburgerButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger-is-active');
    hamburgerButton.classList.toggle('hamburger-close');

    if(hamburgerMenu.classList.contains('hamburger-is-active')) {
        // disable scroll when hamburger menu is active
        body.style.overflow = 'hidden';
    } else {
        // enable scroll when hamburger is closed
        body.style.overflow = 'auto';
    }


})

hamburgerButton.addEventListener('mouseover', () => {
    hamburgerButton.style.color = 'rgb(255, 153, 0)';
})
hamburgerButton.addEventListener('mouseout', () => {
    hamburgerButton.style.color = '';
})

// disable scroll
// function disableScroll() {
//     //Get current page scroll position
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

//     //if any scroll is attempted, set this to the previous value
//     window.onscroll = function() {
//         window.scrollTo(scrollLeft, scrollTop);
//     }
// }

// enable scroll
// function enableScroll() {
//     window.onscroll = function () {};
// }

