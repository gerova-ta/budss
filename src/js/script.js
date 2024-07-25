"use strict";

const menuButton = document.querySelector('.header__menu');
const contactButton = document.querySelector('.contact__button');
const footerMobile = document.querySelector('.footer');
const footerDesktop = document.querySelector('.footer-desktop');


window.addEventListener('resize', () => {
   if (window.innerWidth > 768) {
      menuButton.classList.add('hidden');
      contactButton.classList.remove('hidden');

      footerMobile.classList.add('hidden');
      footerDesktop.classList.remove('hidden');
   }
   else{
      menuButton.classList.remove('hidden');
      contactButton.classList.add('hidden');

      footerMobile.classList.remove('hidden');
      footerDesktop.classList.add('hidden');
   }
});