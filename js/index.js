const menuHamburger = document.querySelector(".BHamburger");
const navLinks = document.querySelector(".toolbar")

const firstp = document.querySelector('.first-page');
const secondp = document.querySelector('.second-page');
const thirdp = document.querySelector('.third-page');
const fourthp = document.querySelector('.fourth-page');

const scrollBtnAccueil = document.querySelector('.accueil');
const scrollBtnpresentation = document.querySelector('.presentation');
const scrollBtnLogiciel = document.querySelector('.logiciel');
const scrollBtncontact = document.querySelector('.contact');

menuHamburger.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu')
})

scrollBtnAccueil.addEventListener('click', () => {
  window.scrollTo({
    top: firstp.offsetTop,
    behavior: 'smooth'
  });
});
scrollBtnpresentation.addEventListener('click', () => {
    window.scrollTo({
      top: secondp.offsetTop,
      behavior: 'smooth'
    });
  });
  scrollBtnLogiciel.addEventListener('click', () => {
    window.scrollTo({
      top: thirdp.offsetTop,
      behavior: 'smooth'
    });
  });
  scrollBtncontact.addEventListener('click', () => {
    window.scrollTo({
      top: fourthp.offsetTop,
      behavior: 'smooth'
    });
  });
