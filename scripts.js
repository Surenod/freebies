const swiper = new Swiper('.feedback-slider__container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween:50,
  slidesPerView:3,



  // If we need pagination
  pagination: {
    el: '.slider-controls__bullets',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__arrow-next',
    prevEl: '.slider__arrow-prev',
  },

});