document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'fraction'
  //   },

  },
  );

  // new Swiper('.mySwiper', {
  //   // navigation: {
  //   //   nextEl: '.swiper-button-next',
  //   //   prevEl: '.swiper-button-prev'
  //   // },
  //   slidesPerView: 10,
  //   spaceBetween: 10,
  //   // pagination: {
  //   //   el: '.swiper-pagination',
  //   //   type: 'fraction'
  //   // },
  // },
  // );

});

// document.addEventListener('DOMContentLoaded', function() {
//     var swiper = new Swiper(
//         ".mySwiper",
//         {
//           slidesPerView: 1.3,
//           spaceBetween: 10,
//         },
//       );
// });

