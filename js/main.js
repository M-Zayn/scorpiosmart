
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  AOS.init();
  
  
$(function() {



  $(".nav-bar .zx-container .nav-icons .search-icon").on("click", function() {
    $(this).toggleClass("lnr-magnifier");
    $(this).toggleClass("lnr-cross");
    $(".nav-bar .search-popup").toggleClass("show");
    // $(".search-overlay").fadeIn();
  });
  // $(".search-overlay").on("click", function() {
  //   $(".nav-bar .search-popup").removeClass("show");
  //   $(this).fadeOut();
  // });
  
  // $('a[data-scroll]').on("click",function (e){
  //   e.preventDefault();    
    
  //   $("html, body").animate({
  //     scrollTop: $($(this).attr("data-scroll")).offset().top
  //   }, 1000);
  // });

    $('.header .owl-Carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:0,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });
    $(".header .owl-Carousel .owl-next").html('<span class="lnr lnr-chevron-left"></span>');
    $(".header .owl-Carousel .owl-prev").html('<span class="lnr lnr-chevron-right"></span>');

    
    $('.sp-offers .zx-container .owl-Carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:15,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              nav:false,
              dots:true,
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:5
          }
      }
    });
    $(".sp-offers .zx-container .owl-next").html('<span class="lnr lnr-chevron-left"></span>');
    $(".sp-offers .zx-container .owl-prev").html('<span class="lnr lnr-chevron-right"></span>');


    $('.testimonial .owl-Carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:0,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              nav:false,
              dots:true,
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:2
          }
      }
    });
    $(".testimonial .owl-next").html('<span class="lnr lnr-chevron-left"></span>');
    $(".testimonial .owl-prev").html('<span class="lnr lnr-chevron-right"></span>');
    


    $('.courses .owl-Carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:0,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              nav:false,
              dots:true,
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
    $(".courses .owl-next").html('<span class="lnr lnr-chevron-left"></span>');
    $(".courses .owl-prev").html('<span class="lnr lnr-chevron-right"></span>');


    $('.co-working .owl-Carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:20,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              nav:false,
              dots:true,
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:7
          }
      }
    });
    $(".co-working .owl-next").html('<span class="lnr lnr-chevron-left"></span>');
    $(".co-working .owl-prev").html('<span class="lnr lnr-chevron-right"></span>');

    

    if($(window).width() < 992) {
      $(".categories .zx-container .category").wrapAll("<div class='owl-Carousel'></div>");
      $('.categories .zx-container .owl-Carousel').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        autoplay:true,
        loop:true,
        margin:10,
        dots:true,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                nav:false,
                dots:true,
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:7
            }
        }
      });

      $(".categories .category .category-img img").removeAttr("data-aos");
      $(".service .zx-container .serv div").removeAttr("data-aos");
      $(".footer .footer-slide").removeAttr("data-aos");
    } else {

    }
  
    if ($(window).width() < 992) {
      $(".footer .footer-slide h3").on("click", function() {
        $(this).toggleClass("active");
        $(this).siblings("ul").slideToggle();
      });
    } else {

    }

  // menu - search



    $(".nav-bar .zx-container .nav-icons .menu-icon").on("click", function() {
      $(".fixed-menu").fadeIn();
      $(".fixed-menu .menu").addClass("show");
      $(".fixed-menu .menu .menu-list ul").addClass("active");
      $('html, body').css("overflow-y", "hidden");
    });
    $(".fixed-menu, .close").on("click", function() {
      $(".fixed-menu").fadeOut();
      $(".fixed-menu .menu").removeClass("show");
      $(".fixed-menu .menu .menu-list ul").removeClass("active");
      $('html, body').css("overflow-y", "visible");
    });
    $(".fixed-menu .menu").on("click", function(e) {
      e.stopPropagation();
    });

    $(".fixed-menu .menu .menu-list ul .slide").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
      });
    
  

  
});