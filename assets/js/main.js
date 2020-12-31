(function($) {
    "use strict";

    //===== Prealoder
    $(window).on('load', function(event) {
        $('.proloader').delay(500).fadeOut(500);
    });


    // sticky
    var wind = $(window);
    var sticky = $('.header-bar-area');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
    /*=========================
      OwlCarousel START
    ===========================*/

    $(".partner_slider").owlCarousel({
        items: 5,
        nav: true,
        dot: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        autoplayTimeout: 2000,
        loop: false,
        margin: 20,
        smartSpeed: 450,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,

            },

            768: {
                items: 3,

            },
            1000: {
                items: 5,

            }
        }
    });
    /* -------------------------------------
                 Responsive menu
    -------------------------------------- */
    var siteMenuClone = function() {

        $('.js-clone-nav').each(function() {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });

        setTimeout(function() {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function() {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.js-menu-toggle', function(e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

    };
    siteMenuClone();

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });



    /* ----------------------------------------
               Nice select js
        ------------------------------------------- */
    $('.select_box').niceSelect();

    $('.glass-type').on('click', function() {
        $(this).toggleClass('selected');
        $(this).parent().siblings().find('.glass-type').removeClass('selected');
    });

    $('.read-more_btn').on('click',function(){
        $(this).addClass('d-none');
        $(this).parent('.job-post').find('.read-more').slideDown(600);
    });


    /*------------------------
              Category menu Activation
           --------------------------*/
    $('.category-sub-menu li.has-sub > a').on('click', function() {
        $(this).toggleClass('round');
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').toggleClass('d-block');
        } else {
            element.addClass('open');
            element.children('ul').toggleClass('d-block');
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').removeClass('d-block');
        }
    });











})(jQuery);