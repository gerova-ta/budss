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
});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudScpO1xyXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RfX2J1dHRvbicpO1xyXG5jb25zdCBmb290ZXJNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XHJcbmNvbnN0IGZvb3RlckRlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLWRlc2t0b3AnKTtcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcclxuICAgICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIGZvb3Rlck1vYmlsZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgZm9vdGVyRGVza3RvcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgfVxyXG4gICBlbHNle1xyXG4gICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgZm9vdGVyTW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICBmb290ZXJEZXNrdG9wLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICB9XHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
