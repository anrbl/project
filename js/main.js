$(function () {

    $('.cont_slide').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_content .arrows .left').on('click', function () {
        $('.cont_slide').slick('slickPrev');
    });
    $('.main_content .arrows .right').on('click', function () {
        $('.cont_slide').slick('slickNext');
    });
})