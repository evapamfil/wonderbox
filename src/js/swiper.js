import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const swiper = new Swiper('.swiper-banner', {

    modules: [Navigation, Autoplay],

    autoplay:{
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,

    navigation: {
      nextEl: '.swiper-banner-button-next',
      prevEl: '.swiper-banner-button-prev',
    }
  });

  const swiperProducts = new Swiper('.swiper-products', {

    modules: [Navigation, Pagination],

    slidesPerView: 1,
    spaceBetween: 10,
   
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
        showSwitchArrows: true
      }
    },

    navigation: {
      nextEl: '.swiper-products-button-next',
      prevEl: '.swiper-products-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });