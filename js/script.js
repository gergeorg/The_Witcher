const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },

  breakpoints: {
    540: {
      slidesPerView: 2
    }
  }
});


const menuButton = document.querySelector ('.menu-btn');
const menu = document.querySelector ('.header-container');

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-btn-active');
  menu.classList.toggle('header-active');
});
