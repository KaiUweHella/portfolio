const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('open-menu');
    menu.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open-menu');
    menu.classList.remove('active');
    menuOpen = false;
  }
})