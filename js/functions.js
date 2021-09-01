function fixHeader() {
  let header = $('.header'), //хедер
      headerHeight = header.innerHeight(), // высота хедера
      content = $('.welcome'); //контентная часть

  $(window).scroll(function() { //событие скролла страницы
    let windowScroll = $(this).scrollTop(); //скроллим от верха страницы
    if (windowScroll >= headerHeight) { //условие в котором смотрим просклорили страницу на высоту хедера или нет, если да:
      header.addClass('header_fixed'); //довешиваем класс на хедер
      content.css({ //довешиваем отступ на контент
        'padding-top': headerHeight
      })
    } 
    else { //в противном случае все удаляем
      header.removeClass('header_fixed');
      content.css({
        'padding-top': '0'
      })
    }
  })
};

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
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  });
};

fixHeader();
changeHamburger();
drawSlider();