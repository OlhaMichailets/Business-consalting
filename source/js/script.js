// const { default: Swiper } = require("swiper");

document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.webnautsSwiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },

  },
  );

  new Swiper('.growthSwiper', {
    slidesPerView: 1,
    nested: true,
    spaceBetween: 30,

    thumbs: {
      swiper: {
        el: '.growthSwiper-mini-slider',
        slidesPerView: 4.6,
        spaceBetween: 30,
        watchOverflow: true
      },
    },
  },
  );

  new Swiper('.teamSwiper', {
    nested: true,
    slidesPerView: 4,
    spaceBetween: 20,
    grid: {
      rows: 2,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  },
  );

});

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
  mySwiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  mySwiper.slideNext();
})

