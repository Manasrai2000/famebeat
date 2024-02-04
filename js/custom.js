// 
document.addEventListener("DOMContentLoaded", function () {

    el_autohide = document.querySelector('.autohide');

    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';

    if (el_autohide) {

        var last_scroll_top = 0;
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;

        });
        // window.addEventListener

    }
    // if

});




//  for hero section 
var swiper = new Swiper('.swiperherosec', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
});
// for article section 
var swiper = new Swiper('.swiperarticle', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    breakpoints: {
        980: {
            slidesPerView: 3,
        },
        720: {
            slidesPerView: 2,
        },
        280: {
            slidesPerView: 1,
        }
    },
});
