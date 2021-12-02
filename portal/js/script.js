$(function() {

    /* gnb */
    $('#header nav ul.depth1 li h2 a').mouseover(function() {
        $('ul.depth2').stop().fadeOut();
        $(this).parents('li').find('ul.depth2').stop().fadeIn();
    });
    $('#header nav ul.depth1 > li').mouseleave(function() {
        $('ul.depth2').stop().fadeOut();
    });

    /* sitemap */
    $('#header button.btn_sitemap').click(function() {
        $('#sitemap').fadeIn();
        $('.sitemap_bg').fadeIn();
        $('body').css('position', 'fixed');
    });
    $('#header #sitemap .sitemap_close').click(function() {
        $('#sitemap').fadeOut();
        $('.sitemap_bg').fadeOut();
        $('body').css('position', 'relative');
    });

    /* footer */
    $('#footer .link > a').click(function() {
        if ($('#footer .link ul').css('display') == 'none') {
            $('#footer .link ul').fadeIn();
            $('#footer .link > a').addClass('open');
        } else {
            $('#footer .link ul').fadeOut();
            $('#footer .link > a').removeClass('open');
        }
        return false;
    });

    $('#header .btn_sitemap_box button.mobile_open').click(function() {
        if ($(this).hasClass('active')) {
            $('body').removeClass('fixed');
            $('#mobile_menu').animate({
                right: -3000
            }, 300);
            $(this).removeClass('active');
        } else {
            $('body').addClass('fixed');
            $('#mobile_menu').animate({
                right: 0
            }, 300);
            $(this).addClass('active');
        }
    });
    $('ul.mobile_menu_depth1 li h2 a').click(function() {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().parent().find('.mobile_menu_depth2').slideUp();
            $(this).parent().removeClass('active');
        } else {
            $('ul.mobile_menu_depth1 li').find('.mobile_menu_depth2').slideUp();
            $(this).parent().parent().find('.mobile_menu_depth2').slideDown();
            $('ul.mobile_menu_depth1 li h2').removeClass('active');
            $(this).parent().addClass('active');
        }
        return false;
    });
    $('.mobile_close').click(function() {
        $('#header .mobile_menu').animate({
            right: -3000
        }, 300);
        $('#header .mobile_bg').animate({
            right: -3000
        }, 300);
        $('body').css('position', 'relative');
    });

});
