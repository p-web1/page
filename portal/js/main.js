$(function() {

    /* section1 */
    $('#section1 .visual .text_box .text').first().addClass('active');
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        initialSlide: 0,
        speed: 1500,
        loop: true,
        loopAdditionalSlides: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function() {
                $('#section1 .visual .text_box .text').removeClass('active');
                $('#section1 .visual .text_box .text').eq(this.realIndex).addClass('active');
            }
        }
    });
    $('#section1 .visual button.pause').on('click', function() {
        $(this).hide();
        $('#section1 .visual button.play').show();
        mySwiper.autoplay.stop();
        return false;
    });
    $('#section1 .visual button.play').on('click', function() {
        $(this).hide();
        $('#section1 .visual button.pause').show();
        mySwiper.autoplay.start();
        return false;
    });

    /* search */
    $('#section1 .visual .select_box > a').click(function() {
        if ($(this).next().css('display') == 'none') {
            $('#section1 .visual .search_box .select_box ul').hide();
            $(this).next().fadeIn();
        } else {
            $('#section1 .visual .search_box .select_box ul').hide();
        }
    });

    /* notice */
    $('#section2 .slick_wrap .slick').slick({
        autoplay: true,
        arrows: true,
        dots: false,
        prevArrow: $('#section2 .notice .control .prev'),
        nextArrow: $('#section2 .notice .control .next'),
        accessibility: false,
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 1000,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        speed: 1500,
        vertical: true,
    });
    $('#section2 .notice .control button').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('pause')) {
            $(this).hide();
            $('#section2 .notice .control .play').show();
            $('#section2 .slick_wrap .slick').slick('slickPause');
        } else if ($(this).hasClass('play')) {
            $(this).hide();
            $('#section2 .notice .control .pause').show();
            $('#section2 .slick_wrap .slick').slick('slickPlay');
        }
    });

    /* tab */
    $('#section3 .right').hide();
    $('#section3 .right').first().show();
    $('#section3 .left .tab1 a').click(function() {
        $('#section3 .left .tab1 a').removeClass('active');
        $(this).addClass('active');
        var Idx = $(this).index();
        $('#section3 .right').hide();
        $('#section3 .right').eq(Idx).show();
        return false;
    });

    /* section5 */
    $('#section5 .slick').slick({
        variableWidth: true,
        autoplay: false,
        arrows: true,
        dots: false,
        prevArrow: $('#section5 .control button'),
        nextArrow: $('#section5 .control button'),
        accessibility: false,
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        zIndex: 1000,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        speed: 1500,
        responsive: [{
            breakpoint: 1400,
            settings: {}
        }, ]
    });

});
