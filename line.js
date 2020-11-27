var MenuBtn = document.querySelector('.menu-btn');
var MenuClose = document.querySelector('.menu-close');
var MenuList = document.querySelector('.menu-list');

var dr = document.querySelector('.services');
var pr = document.querySelector('.portfolio');
var drC = document.querySelector('.dropdown');
var prC = document.querySelector('.dropdown2');


MenuClose.addEventListener('click', function () {
  MenuList.classList.remove('active');
});

MenuBtn.addEventListener('click', function () {
  MenuList.classList.add('active');
});


dr.addEventListener('click', function () {
  dr.classList.toggle('active')
  drC.classList.toggle('active')
})

pr.addEventListener('click', function () {
  pr.classList.toggle('active')
  prC.classList.toggle('active')
})
//////////////////////////////////////
////    SCROLL EFFECT     ///////////////
////////////////////////////////////

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    document.querySelector('.header').classList.add('header_tiny');
  } else {
    document.querySelector('.header').classList.remove('header_tiny');
  }
});

$(".slider-inner").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autplaySpeed: 2000,
  pauseOnHover: false,
});



$(".works-box").slick({
  autoplay: true,
  autplaySpeed: 1000,
  slidesToShow: 4,
  nextArrow: '<button type="button" class="slick-next work-right"><img src="img/arrow-right.svg"></button>',
  prevArrow: '<button type="button" class="slick-prev work-left"><img src="img/arrow-left.svg"></button>',
  arrows: true,

  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    }]
});