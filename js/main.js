//MENU MOBILE
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--open');
    }
    else    {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--open');
    }
});

//MAP
var map1 = document.querySelector(".contact__map");

function initialize () {
    var centerMap = new google.maps.LatLng(61.7911674, 34.3627089);
    var optionMap = {
        zoom: 16,
        center: centerMap,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mymap = new google.maps.Map(map1, optionMap);
    var image = {
        url: "../img/icons/map-pin.svg",
        anchor: new google.maps.Point(0, 100)
    };

    var markPos = new google.maps.LatLng(61.7911674, 34.3627089);
    var marker = new google.maps.Marker({
        position: markPos,
        icon: image,
        map: mymap
    });
}
google.maps.event.addDomListener(window, "load", initialize);
map1.classList.add('map-google');

//SLIDER
var reviews = document.querySelectorAll('.reviews__item');
var i = 0;
var j = 0;
var a = reviews.length;
var nextSlide = document.querySelector('.reviews__btn--next');
var prevSlide = document.querySelector('.reviews__btn--prev');

nextSlide.addEventListener('click', function() {

    for (i = 0; i < a; i++) {
        if (reviews[i].classList.contains('reviews__item--active')) {
            break;
        }
    }

    reviews[i].classList.remove('reviews__item--active');

    if (i == a-1) {
        i = 0;
        reviews[i].classList.add('reviews__item--active');
    }
    else {
        reviews[i + 1].classList.add('reviews__item--active');
    }
});

prevSlide.addEventListener('click', function() {


    for (i = 0; i < a; i++) {
        if (reviews[i].classList.contains('reviews__item--active')) {
            break;
        }
    }

    reviews[i].classList.remove('reviews__item--active');

    if (i == 0) {
        i = a-1;
        reviews[i].classList.add('reviews__item--active');
    }
    else {
        reviews[i - 1].classList.add('reviews__item--active');
    }
});
