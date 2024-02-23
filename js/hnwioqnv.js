$('.pictures-carousal .owl-carousel').owlCarousel({
    items: 4,
    dots: true,
    nav: true,
    dotsEach: true,
    mouseDrag: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ["<img src='../images/packages/left.png'>", "<img src='../images/packages/right.png'>"],
    responsive: {
        0:{
        items: 1
        },
        576:{
        items: 2
        },
        768:{
        items: 2
        },
        992:{
        items: 3
        },
        1200:{
        items: 4
        }
    }
});
$('.topc-carousal .owl-carousel').owlCarousel({
    items: 6,
    dots: false,
    nav: true,
    dotsEach: true,
    mouseDrag: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ["<img src='../images/packages/left.png'>", "<img src='../images/packages/right.png'>"],
    responsive: {
        0:{
        items: 1
        },
        480:{
        items: 2
        },
        768:{
        items: 2
        },
        992:{
        items: 3
        },
        1200:{
        items: 6
        }
    }
});