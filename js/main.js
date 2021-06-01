$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll < 200) {

            $('.fixed-top').removeClass('background-scroll-down');
        } else {

            $('.fixed-top').addClass('background-scroll-down');
        }

    })


})