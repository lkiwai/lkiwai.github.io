// nav bar hide on scroll down and show on scroll up
const navBar = document.querySelector(".nav-container")
let lastScrollY = window.scrollY;


    window.addEventListener("scroll", () => {

        if (lastScrollY <window.scrollY) {
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

