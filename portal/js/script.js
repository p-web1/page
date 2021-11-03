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
    });
    $('#header #sitemap .sitemap_close').click(function() {
        $('#sitemap').fadeOut();
        $('.sitemap_bg').fadeOut();
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

});
