$(document).ready(function() {
    $('.search-option').hide();
    $(".main-search").on('click', function() {
        $('.search-option').animate({
            height: 'toggle',
        })
    });
    $("#menu").mmenu({
        extensions: ["position-bottom", "fullscreen", "theme-black", "listview-50", "fx-panels-slide-up", "fx-listitems-drop", "border-offset"],
        navbar: {
            title: ""
        },
        navbars: [{
                height: 2,
                content: ['<a href="#/" class="fa fa-phone"></a>', '<img src="img/profile-2-w.png" />', '<a href="#/" class="fa fa-envelope"></a>']
            },
            {
                content: ["prev", "title"]
            }
        ]
    }, {});
    $(".mh-head.mm-sticky").mhead({
        scroll: {
            hide: 200
        }
    });
    $(".mh-head:not(.mm-sticky)").mhead({
        scroll: false
    });
    $('body').on('click', 'a[href^="#/"]', function() {
        alert("Thank you for clicking, but that's a demo link.");
        return false
    })
});
$(document).ready(function() {
    $("#menu-reponsive").mmenu({
        extensions: ["position-bottom", "fullscreen", "theme-black", "listview-50", "fx-panels-slide-up", "fx-listitems-drop", "border-offset"],
        navbar: {
            title: ""
        },
        navbars: [{
                height: 2,
                content: ['<a href="#/" class="fa fa-phone"></a>', '<img src="img/profile-2-w.png" />', '<a href="#/" class="fa fa-envelope"></a>']
            },
            {
                content: ["prev", "title"]
            }
        ]
    }, {});
    $(".mh-head.mm-sticky").mhead({
        scroll: {
            hide: 200
        }
    });
    $(".mh-head:not(.mm-sticky)").mhead({
        scroll: false
    });
    $('body').on('click', 'a[href^="#/"]', function() {
        alert("Thank you for clicking, but that's a demo link.");
        return false
    })
});
$(document).ready(function() {
    $("#menu-reponsiv").mmenu({
        extensions: ["position-bottom", "fullscreen", "theme-black", "listview-50", "fx-panels-slide-up", "fx-listitems-drop", "border-offset"],
        navbar: {
            title: ""
        },
        navbars: [{
                height: 2,
                content: ['<a href="#/" class="fa fa-phone"></a>', '<img src="img/profile-2-w.png" />', '<a href="#/" class="fa fa-envelope"></a>']
            },
            {
                content: ["prev", "title"]
            }
        ]
    }, {});
    $(".mh-head.mm-sticky").mhead({
        scroll: {
            hide: 200
        }
    });
    $(".mh-head:not(.mm-sticky)").mhead({
        scroll: false
    });
    $('body').on('click', 'a[href^="#/"]', function() {
        alert("Thank you for clicking, but that's a demo link.");
        return false
    })

});
$(document).ready(function() {
    $("#single_item").slick({
        dots: true,
        adaptiveHeight: true,
        autoplaySpeed: 6000,
        arrows: false,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });
    $(".list-slider-areas").slick({
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
        arrows: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $(".product-slide").slick({
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
        arrows: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    });
    $(".slide-coke").slick({
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $(".slide-house").slick({
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 3500,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $(".pic-achievements , .pic-partner").slick({
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    });
});
$(document).ready(function() {
    $(".number").click(function() {
        alert("0902 142 539")
    });
});