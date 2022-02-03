$(".loader").delay(400).fadeOut("slow");
new WOW().init();

$(function () {

    // burger menu
    (function mobileBtn() {
        const mobileBtnOpen = $('.open-nav-btn'),
            mobileMenu = $('.header-nav');

        mobileBtnOpen.on('click', function(){
            mobileMenu.toggleClass('show');
            $(this).toggleClass('active');
            $('.overlay').toggleClass('show');
            $('body').toggleClass('no-scroll');
            $('html').toggleClass('no-scroll');
        });
    }());

    // custom header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){
            $('.header').addClass("header--shadow");
        }
        else{
            $('.header').removeClass("header--shadow");
        }
    });

    // banner
    const $status = $('.pagingInfo');
    const $slickElement = $('.banner-slider');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        const i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '—' + slick.slideCount);
    });
    $slickElement.slick({
        dots: false,
        fade: true,
        cssEase: 'linear',
        speed: 600,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next',
        autoplay: true,
        autoplaySpeed: 10000
    });

    // custom cursor
    const cursor = $('.circle'),
          middleCursor = $('.button-link'),
          smallCursor = $('.link, .header-nav a');

    $(window).on('mousemove', function (e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    middleCursor.on('mouseenter', function () {
        cursor.css('transform', 'scale(0.6)');
    });
    middleCursor.on('mouseleave', function () {
        cursor.css('transform', 'scale(1.0)');
    });
    middleCursor.on('mousedown', function () {
        cursor.css('transform', 'scale(1.5)');
    });
    middleCursor.on('mouseup', function () {
        cursor.css('transform', 'scale(0.6)');
    });


    smallCursor.on('mouseenter', function () {
        cursor.css('transform', 'scale(0.3)');
    });
    smallCursor.on('mouseleave', function () {
        cursor.css('transform', 'scale(1.0)');
    });
    smallCursor.on('mousedown', function () {
        cursor.css('transform', 'scale(1.5)');
    });
    smallCursor.on('mouseup', function () {
        cursor.css('transform', 'scale(0.3)');
    });


});







