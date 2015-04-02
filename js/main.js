$(function() {

    var $slide = $('.slick').slick({
        //dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    }).on('afterChange', function(e, slick, currentSlide) {
        if( currentSlide == 3 ) {
            $slide.slick('slickPause');
        }
    });

});