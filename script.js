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

// toggles nav-menu-active class 
const hamburgerButton = document.querySelector('.hamburger-menu');
const hamburgerClose = document.getElementById('burgerButton');
const navLink = document.getElementById('navLink');
const blurMenu = document.querySelector('.blur-menu');
const body = document.querySelector('body');

hamburgerButton.addEventListener('click', () => {
    navLink.classList.toggle('nav-menu-active');

    if(navLink.classList.contains('nav-menu-active')) {
        openMenuFx()
    } else {
        closeMenuFx()
    }
})

// disable scroll when hamburger menu is active blurs the body when the hamburger menu appears
function openMenuFx() {
    body.style.overflow = 'hidden';
    blurMenu.style.filter = 'blur(2px)';
}
// enable scroll when hamburger is closed and remove blur
function closeMenuFx() {
    body.style.overflow = 'auto';
    blurMenu.style.filter = '';
}
// gives orange color when you hover mouse to hamburger butn
hamburgerButton.addEventListener('mouseover', () => {
    hamburgerButton.style.color = 'rgb(255, 153, 0)';
})
// orange color disapper when you dont hover mouse to hamburger butn
hamburgerButton.addEventListener('mouseout', () => {
    hamburgerButton.style.color = '';
})

// hide the burger menu when clicking links
function hideBurgerMenu() {
    navLink.classList.remove('nav-menu-active');
    closeMenuFx()
}
const home = document.getElementById('home');
const about = document.getElementById('about');
const program = document.getElementById('program');
const gallery = document.getElementById('gallery');
const contact = document.getElementById('contact');

home.addEventListener('click',hideBurgerMenu);
about.addEventListener('click',hideBurgerMenu);
program.addEventListener('click',hideBurgerMenu);
gallery.addEventListener('click',hideBurgerMenu);
contact.addEventListener('click',hideBurgerMenu);

// footer current year for copyright
let yearUpdate = document.getElementById('currentYear');
yearUpdate.innerHTML = new Date().getFullYear();

// make loader disapper after page load while disabling scrolling while loading
const removeLoader = document.getElementById('loaderRemove');
const scrollHide = document.getElementById('scrollHide');

window.addEventListener('load', () => {
    removeLoader.classList.add('loader--hidden');
})
// scrolls to top when reloading page
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}