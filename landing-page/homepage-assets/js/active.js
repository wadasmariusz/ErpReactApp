// Index of jQuery Active Code

// :: 1.0 PRELOADER ACTIVE CODE
// :: 2.0 NAVIGATION MENU ACTIVE CODE
// :: 3.0 SCROLL TO TOP ACTIVE CODE
// :: 4.0 SCROLL LINK ACTIVE CODE
// :: 5.0 SMOOTH SCROLLING ACTIVE CODE
// :: 6.0 AOS ACTIVE CODE
// :: 7.0 AOS ACTIVE CODE
// :: 8.0 PREVENT DEFAULT ACTIVE CODE
// :: 9.0 COUNTERUP ACTIVE CODE
// :: 10.0 FANCYBOX VIDEO POPUP ACTIVE CODE
// :: 11.0 FEATURES SLIDER ACTIVE CODE
// :: 12.0 TESTIMONIALS ACTIVE CODE
// :: 13.0 APP SCREENSHOTS ACTIVE CODE
// :: 14.0 CONTACT FORM ACTIVE CODE

(function ($) {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // :: 1.0 PRELOADER ACTIVE CODE
    $(window).on("load", function () {
        $('.preloader-wapper').addClass('loaded');
        if ($('.preloader-wapper').hasClass('loaded')) {
            $('.preloader-main').delay(1200).queue(function () {
                $(this).remove();
            });
        }
    });

    // :: 2.0 NAVIGATION MENU ACTIVE CODE
    // dropdown for mobile
    $(document).ready(function () {
        checkWidth(true);
        $(window).resize(function () {
            checkWidth(false);
        });
    });

    function checkWidth(init) {
        // If browser resized, check width again 
        if ($(window).width() <= 991) {
            $('.dropdown-submenu a').on("click", function (e) {
                $(this).next('ul').toggle();
                e.stopPropagation();
            });
        }
    }
    function navMenu() {

        // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
        $('[data-toggle="navbarToggler"]').click(function () {
            $('.navbar').toggleClass('active');
            $('body').toggleClass('canvas-open');
        });
        // MAIN MENU TOGGLER ICON
        $('.navbar-toggler').click(function () {
            $('.navbar-toggler-icon').toggleClass('active');
        });

        // NAVBAR STICKY
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 1) {
                $stickyNav.addClass("navbar-sticky-moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky-moved-up");
            }
            // apply transition
            if (scroll >= 1) {
                $stickyNav.addClass("navbar-sticky-transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky-transitioned");
            }
            // sticky on
            if (scroll >= 1) {
                $stickyNav.addClass("navbar-sticky-on");
            } else {
                $stickyNav.removeClass("navbar-sticky-on");
            }

        });
    }
    navMenu();

    // :: 3.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

    // :: 4.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');

    // :: 5.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // :: 6.0 AOS ACTIVE CODE
    AOS.init();

    // :: 7.0 WOW ACTIVE CODE
    new WOW().init();

    // :: 8.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 9.0 COUNTERUP ACTIVE CODE
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // :: 10.0 FANCYBOX VIDEO POPUP ACTIVE CODE
    $(".play-btn").fancybox({
        animationEffect: "zoom-in-out",
        transitionEffect: "circular",
        maxWidth: 800,
        maxHeight: 600,
        youtube: {
            controls: 0
        }
    });

    // :: 11.0 FEATURES SLIDER ACTIVE CODE
    $('.features-slider.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 6000,
        dotsContainer: '.features-content'
    });

    // :: 12.0 TESTIMONIALS ACTIVE CODE
    var testimonialSlider = $('.testimonials');
    testimonialSlider.owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 500,
        autoplay: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            }
        }
    });

    testimonialSlider.on("translate.owl.carousel", function () {
        $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").removeClass("animated zoomIn").css("opacity", "0");
    });
    testimonialSlider.on("translated.owl.carousel", function () {
        $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").addClass("animated zoomIn").css("opacity", "1");
    });

    // :: 13.0 BRANDING SLIDER ACTIVE CODE
    $('.branding-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });

    // :: 14.0 APP SCREENSHOTS ACTIVE CODE
    $('.app-screenshots').slick({
        dots: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
          ]
    });

    // :: 15.0 CONTACT FORM ACTIVE CODE
    // Get the form.
    var form_1 = $('#contact-form-1');
    var form_button_1 = $('#contact-form-1 button');
    // Get the messages div.
    var formMessages_1 = $('.form-message-1');
    // Set up an event listener for the contact form.
    $(form_button_1).on("click", function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        // Serialize the form data.
        var formData = $(form_1).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form_1).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages_1).removeClass('error');
                $(formMessages_1).addClass('success');

                // Set the message text.
                $(formMessages_1).text(response);

                // Clear the form.
                $('#contact-form-1 input,#contact-form-1 textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages_1).removeClass('success');
                $(formMessages_1).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages_1).text(data.responseText);
                } else {
                    $(formMessages_1).text('Ups! Wystąpił błąd i formularz nie mógł zostać wysłany. Spróbuj ponownie za kilka chwil.');
                }
            });
    });


    // :: 15.0 CONTACT FORM ACTIVE CODE
    // Get the form.
    var form_2 = $('#contact-form-2');
    var form_button_2 = $('#contact-form-2 button');
    // Get the messages div.
    var formMessages_2 = $('.form-message-2');
    // Set up an event listener for the contact form.
    $(form_button_2).on("click", function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        // Serialize the form data.
        var formData = $(form_2).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form_2).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages_2).removeClass('error');
                $(formMessages_2).addClass('success');

                // Set the message text.
                $(formMessages_2).text(response);

                // Clear the form.
                $('#contact-form-2 input,#contact-form-2 textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages_2).removeClass('success');
                $(formMessages_2).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages_2).text(data.responseText);
                } else {
                    $(formMessages_2).text('Ups! Wystąpił błąd i formularz nie mógł zostać wysłany. Spróbuj ponownie za kilka chwil.');
                }
            });
    });

    // :: 15.0 SUBSCRIBE
    // Get the form.
    var form_3 = $('#subscribe-form');
    var form_button_3 = $('#subscribe-form button');
    // Get the messages div.
    var formMessages_3 = $('.form-message-3');
    // Set up an event listener for the contact form.
    $(form_button_3).on("click", function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        // Serialize the form data.
        var formData = $(form_3).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form_3).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages_3).removeClass('error');
                $(formMessages_3).addClass('success');

                // Set the message text.
                $(formMessages_3).text(response);

                // Clear the form.
                $('#subscribe-form input,#subscribe-form textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages_3).removeClass('success');
                $(formMessages_3).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages_3).text(data.responseText);
                } else {
                    $(formMessages_3).text('Ups! Wystąpił błąd i formularz nie mógł zostać wysłany. Spróbuj ponownie za kilka chwil.');
                }
            });
    });

    // :: 15.0 SUBSCRIBE
    // Get the form.
    var form_4 = $('#subscribe-form-2');
    var form_button_4 = $('#subscribe-form-2 button');
    // Get the messages div.
    var formMessages_4 = $('.form-message-4');
    // Set up an event listener for the contact form.
    $(form_button_4).on("click", function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        // Serialize the form data.
        var formData = $(form_4).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form_4).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages_4).removeClass('error');
                $(formMessages_4).addClass('success');

                // Set the message text.
                $(formMessages_4).text(response);

                // Clear the form.
                $('#subscribe-form-2 input,#subscribe-form-2 textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages_4).removeClass('success');
                $(formMessages_4).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages_4).text(data.responseText);
                } else {
                    $(formMessages_4).text('Ups! Wystąpił błąd i formularz nie mógł zostać wysłany. Spróbuj ponownie za kilka chwil.');
                }
            });
    });


}(jQuery));