$(function() {

    $('#header').addClass('sub');

    $('#sub .content ul.org_wrap li ul.org_box li > a').click(function() {
        if ($(this).hasClass('active')) {
            $(this).parent().children('.box').fadeOut();
            $(this).removeClass('active');
        } else {
            $(this).parent().children('.box').fadeIn();
            $(this).addClass('active');
        }
        return false;
    });

    /* share */
    $('#sub button.share').click(function() {
        if ($('#sub .share_box .sns').css('display') == 'none') {
            $('#sub .share_box .sns').fadeIn();
        } else {
            $('#sub .share_box .sns').fadeOut();
        }
    });

    /* breadcrumb */
    $('#sub .breadcrumb_box .box > a').click(function() {
        $('#sub .breadcrumb_box .box ul.depth').stop().fadeOut();
        $(this).next().stop().fadeIn();
        return false;
    });
    $('#sub .breadcrumb_box .box ul.depth').mouseleave(function() {
        $('#sub .breadcrumb_box .box ul.depth').stop().fadeOut();
    });

    /* tab */
    $('.statistics_box .right').hide();
    $('.statistics_box .right').first().show();
    $('.statistics_box .left .tab1 a').click(function() {
        $('.statistics_box .left .tab1 a').removeClass('active');
        $(this).addClass('active');
        var Idx = $(this).index();
        $('.statistics_box .right').hide();
        $('.statistics_box .right').eq(Idx).show();
        return false;
    });

    /* tab */
    if (!$(".tab_box .tab").hasClass("mobile")) {
        $(".tab_box .tab").addClass("mobile");
        if ($(".tab_box .tab .swiper-slide-active").size() == 0) {
            tabSwiper = new Swiper(".tab_box .tab", {
                slidesPerView: "auto",
                on: {
                    reachBeginning: function() {
                        $('.tab_box .tab').addClass('left');
                    },
                    reachEnd: function() {
                        $('.tab_box .tab').addClass('right');
                    },
                    fromEdge: function() {
                        $('.tab_box .tab').removeClass('right');
                        $('.tab_box .tab').removeClass('left');
                    }
                }
            });
        }
    }
    if (tabSwiper.isBeginning) {
        $('.tab_box .tab').addClass('left');
    } else {
        $('.tab_box .tab').removeClass('left');
    }
    if (tabSwiper.isEnd) {
        $('.tab_box .tab').addClass('right');
    } else {
        $('.tab_box .tab').removeClass('right');
    }

});
