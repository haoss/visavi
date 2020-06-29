'use strict';

// Document ready
$(document).on('ready', function(){

  // Magnific popup gallery
  $('.gallery').each(function() {
    $(this).magnificPopup({
      delegate: '.gallery-item',
      type: 'image',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });

  // Magnific popup one image
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });

  // Magnific popup video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    showCloseBtn: false,
    callbacks: {
      beforeOpen: function() {
        $('.j-btn-mobile').removeClass('is-active');
        $('.header .navigation').removeClass('is-active');
        $('body').removeClass('is-fixed');
      }
    }
  });

  $('.modal__close').on('click', function() {
    $.magnificPopup.close();
  });

  $('.look__carousel').slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    touchMove: false,
    draggable: false,
    infinite: true,
    swipe: false,
    variableWidth: true,
    prevArrow: '.one-services__gallery-carousel .look__btn-left',
    nextArrow: '.one-services__gallery-carousel .look__btn-right'
  });

  $(".before-after").twentytwenty();

  collapseNavigation();
  headerScroll();
  mobileNav();
  inputMask();
  teamCarousel();
  collapseTable();

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };
});

$(window).on('load', function() {
  $(".loader").delay(400).fadeOut("slow");
});

$(window).on('scroll', function() {
  headerScroll();
});
$(window).on('resize', function() {
  var btn = $('.j-btn-mobile'),
      navigation = $('.header .navigation'),
      body = $('body'),
      width = $(window).width()
  ;

  if (width >= 1320) {
    btn.removeClass('is-active');
    navigation.removeClass('is-active');
    body.removeClass('is-fixed');
  }

  teamCarousel();
});

function collapseNavigation() {
  var li = $('.has-folder'),
      ul = $('.ul-folder'),
      icon = $('.has-folder .icon-arrow-down')
  ;

  icon.each(function(){
    var _this = $(this);
    _this.on('click', function(e){
      e.preventDefault();
      _this.next(ul).slideToggle();
      _this.parent(li).toggleClass('active')
    })
  })
}

function headerScroll() {
  var header = $('.header');
  var width = $(window).width();

  if ($(window).scrollTop() > header.height()) {
    header.addClass('is-scroll');
  } else {
    header.removeClass('is-scroll');
  }
}

function mobileNav() {
  var btn = $('.j-btn-mobile'),
      navigation = $('.header .navigation'),
      body = $('body')
  ;

  btn.on('click', function(e){
    if (btn.hasClass('is-active')) {
      btn.removeClass('is-active');
      navigation.removeClass('is-active');
      body.removeClass('is-fixed');
    } else {
      btn.addClass('is-active');
      navigation.addClass('is-active');
      body.addClass('is-fixed');
    }
  });
}

function inputMask() {
  var localMask = $('.j-mask-local');
  localMask.each(function () {
    $(this).mask("+ 7-(999)-999-99-99");
  });
}

function teamCarousel() {
  var width = $(window).width();
  var teamCarousel = $('.our-team__carousel');

  if (width <= 740) {
    teamCarousel.not('.slick-initialized').slick({
      mobileFirst: true,
      dots: true
    });
  } else {
    if(teamCarousel.hasClass('slick-initialized')){
      teamCarousel.slick('unslick');
    }
  }
}

function collapseTable() {
  var btn = $('.j-table-icon');

  btn.on('click', function(e) {
    var _this = $(this);
    $(this).parents('tr').next('.j-table-content').toggle();
  })
}