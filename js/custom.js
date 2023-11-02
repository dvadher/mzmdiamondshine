$(document).ready(function() {
    $(document).on('click', '.navbar-nav-link', function() {
        $('.navbar-collapse').removeClass('show');
    });

    var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
    $(".main_page").css('min-height', min_height + 'px');
    $(window).resize(function() {
        var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
        $(".main_page").css('min-height', min_height + 'px');
    });

    $(window).scroll(function() {
        var navHeight = $('#custom-header').height();
        var sticky = $('#custom-header');
        if ($(window).scrollTop() > 0) {
            sticky.addClass("sticky")
            $('#dashboard-page').css('padding-top', navHeight + "px");
        } else {
            sticky.removeClass("sticky");
            $('#dashboard-page').css('padding-top', 0);
        }
    });
    $('.jb_front_nav_close button').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });



});

