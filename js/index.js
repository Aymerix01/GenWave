const menuHamburger = document.querySelector(".BHamburger");
const navLinks = document.querySelector(".toolbar")

menuHamburger.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu')
})