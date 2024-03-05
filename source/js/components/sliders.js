import Swiper from '../vendor/swiper.js';

// // Dynamic row
let worbooksSlider = new Swiper(".hero__slider", {
  observer: true,
  observeParents: true,
  spaceBetween: 5,
  slidesPerView: 'auto',
  speed: 3000,
  loop: true,
  autoplay: {
    delay: 0,
  },
});





