import "slick-slider";

(() => {
   $('.header-slider__inner').slick({
      nextArrow: '<button type ="button" class ="slick-btn slick-next">След</button>',
      prevArrow: '<button type ="button" class ="slick-btn slick-prev">Пред</button>',
      infinite: true
   });

   $('.header__menu-open, .header__menu-close').on('click', function (e) {
      e.preventDefault();
      $('.header__menu').toggleClass('active');
   })

})();
