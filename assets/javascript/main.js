$(document).ready(function () {
    $("#slider-area").owlCarousel({
        loop: false,
        margin: -20,
        navText: ["<i class='icon-custom fa-solid fa-chevron-left'></i>", "<i class='icon-custom fa-solid fa-chevron-right'></i>"],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
    $("#hot-brand").owlCarousel({
        loop: true,
        margin: -10,
        padding: 0,
        navText: ["<i class='fa-solid fa-chevron-left '></i>", "<i class='fa-solid fa-chevron-right '></i>"],
        nav: true,
        autoplay: true,
        autoplayTimeout: 3200,
        autoplayHoverPause: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $("#products").owlCarousel({
        loop: true,
        margin: 10,
        padding: 0,
        navText: ["<i class='icon-custom fa-solid fa-chevron-left '></i>", "<i class='icon-custom fa-solid fa-chevron-right '></i>"],
        nav: true,
        autoplay: true,
        autoplayTimeout: 3050,
        autoplayHoverPause: false,
        dots: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4,
            }
        }
    });
    $("#products-clone").owlCarousel({
        loop: true,
        margin: 10,
        padding: 0,
        navText: ["<i class='icon-custom fa-solid fa-chevron-left '></i>", "<i class='icon-custom fa-solid fa-chevron-right '></i>"],
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        dots: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4,
            }
        }
    });
    $("#collection-carousel").owlCarousel({
        loop: true,
        margin: 10,
        padding: 0,
        navText: ["<i class='icon-custom fa-solid fa-chevron-left '></i>", "<i class='icon-custom fa-solid fa-chevron-right '></i>"],
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        dots: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,
            }
        }
    });
    $("#straight-carousel").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        items: 5,

    });
});
