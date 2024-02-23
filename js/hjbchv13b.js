$('.companies-carousal .owl-carousel').owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    dotsEach: true,
    mouseDrag: false,
    autoplay: true,  // Corrected option name
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    navText: ["<img src='../images/common/left_arrw.png'>", "<img src='../images/common/right_arrw.png'>"],
});

$('.we_hbmvac .row  h2').each(function () {
$(this).prop('we_hbmvac .row h2',0).animate({
    Counter: $(this).text()
}, {
    duration: 3000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
});
});