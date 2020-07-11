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
    mainClass: 'mfp-bg-gallery',
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
    waitForAnimate: false,
    variableWidth: true,
    prevArrow: '.one-services__gallery-carousel .look__btn-left',
    nextArrow: '.one-services__gallery-carousel .look__btn-right'
  });

  $(".before-after").twentytwenty();

  $('.about-us__carousel').slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.popular__carousel').slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 759,
        settings: {
          variableWidth: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          variableWidth: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.view__carousel').slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 479,
        settings: {
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.services__carousel').slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: true,
    waitForAnimate: false,
    variableWidth: true
  });

  $('.about__carousel').slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: true,
    waitForAnimate: false,
    prevArrow: '.about__btn-prev',
    nextArrow: '.about__btn-next'
  });

  $('.main-slider__carousel').slick({
    mobileFirst: true,
    dots: true,
    arrows: false,
    infinite: true,
    waitForAnimate: false,
    fade: true,
    cssEase: 'linear'
  });

  collapseNavigation();
  collapseTable();
  headerScroll();
  mobileNav();
  inputMask();
  teamCarousel();
  collapseRow();
  advantagesAnimate();

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

function collapseRow() {
  var block = $('.collapse__content'),
      btn = $('.j-collapse')
  ;

  btn.each(function(){
    var _this = $(this);
    _this.on('click', function(e){
      e.preventDefault();
      _this.next('.collapse__content').slideToggle();
      _this.toggleClass('is-active')
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
    _this.parents('tr').next('.j-table-content').toggle();
    _this.toggleClass('is-active');
  });
}

function advantagesAnimate() {
  var tl;
  var block = $('.advantages__block');

  block.each(function(){
    var _this = $(this);

    _this.hover(function(){
      var text = _this.data('text');
      $('.advantages__images-content > div').text(text);
    });
  });
}