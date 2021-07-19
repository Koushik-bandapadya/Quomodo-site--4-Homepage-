/*
 Theme Name: Insut
 Theme URI: 
 Author: Mosharof
 Author URI: 
 Description: Insut - Insurance HTML5 Responsive Template
 Version: 1.0
 License:
 License URI:
 */
 
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Vido Popup
 2. Fun Fact Count
 3. Clinet Slider 
 4. Skill Bar
 5. Search Form
 6. Service Slider
 7. Testimonial Slider
 8. Back To Top
 9. Preloader
 */

(function ($) {
    'use strict';

    /*--------------------------------------------------------
    / 1. Vido Popup
    /----------------------------------------------------------*/
    $('.popup-video').lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        controls: true
    });

    /*--------------------------------------------------------
    / 2. Fun Fact Count
    /----------------------------------------------------------*/
     var skl = true;
    $('.timer').appear();
    $('.timer').on('appear', function () {
        if (skl)
        {
            $('.timer').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });

    /*--------------------------------------------------------
    / 3. Clinet Slider 
    /----------------------------------------------------------*/
    if($(".client-logo").length > 0){
       $('.client-logo').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            dots: false,
            autoplay: true,
            smartSpeed: 700,
            center: false,
            nav: false,
            items: 5,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1600: {
                    items: 5
                }
            }
        });
    }

    /*--------------------------------------------------------
     / 4. Skill Bar
     /----------------------------------------------------------*/
    if($(".skill-bar").length > 0)
    {
        $('.skill-bar').appear();
        $('.skill-bar').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".skill-bar").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".skill", this).animate({'width': datacount + '%'}, 2000);
            $(".rounds", this).animate({'left': datacount + '%'}, 2000);
            if (coun)
            {
                $(this).find('.prc').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }
    /*--------------------------------------------------------
    / 5. Search Form
    /--------------------------------------------------------*/
    $('.search-area .search-btn').on('click', function (e) {
        e.preventDefault();
        $('.search-area').toggleClass('active');
    });

    /*--------------------------------------------------------
    / 6. Service Slider
    /--------------------------------------------------------*/
    $('.service-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      centerPadding: '140px',
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            centerPadding: '100px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1200,
          settings: {
            centerPadding: '0px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 990,
          settings: {
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
    /*--------------------------------------------------------
    / 7. Testimonial Slider
    /--------------------------------------------------------*/
    if ($('.testimonial-slider').length > 0) {
        $('.testimonial-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            centerMode: true,
            asNavFor: '.slider-nav',
            centerPadding: '0'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.testimonial-slider',
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
    }

    /*--------------------------------------------------------
    / 8. Back To Top
    /----------------------------------------------------------*/
    var back = $("#back-to-top"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            back.css({bottom: '20px', opacity: '1', visibility: 'visible'});
        } else
        {
            back.css({bottom: '-20px', opacity: '0', visibility: 'hidden'});
        }

    });
    body.on("click", "#back-to-top", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });

    /*--------------------------------------------------------
    / 9. Preloader
    /----------------------------------------------------------*/
    $(window).on('load', function (event) {
        $('#preloader').delay(800).fadeOut(500);
    });
    

})(jQuery);