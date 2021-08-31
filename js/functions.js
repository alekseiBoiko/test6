function changeHamburger() {
    $('.menu-btn').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('menu-btn_active');
      $('.nav-block').toggleClass('nav_active');
    })
};

function drawSlider() {
  $('.offers-list').slick({
      
      slidesToShow: 5,
      infinite: true,
      dots: true,
      slidesToScroll: 2,
      slide: 'li',
      arrows: false,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
};

// function turnonFancybox() {
//     $("[data-fancybox]").fancybox();
// };

// let servicesList = $('.service-list'),
//     servicesItem = servicesList.find('.service-item');
//   servicesItem.on('click', function (event) {
//     event.stopPropagation();
//     let cur = $(this);
//     cur.toggleClass('active').siblings().removeClass('active');
//   });

changeHamburger();
// turnonFancybox();
drawSlider();