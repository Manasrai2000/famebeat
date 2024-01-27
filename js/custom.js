// 
document.addEventListener("DOMContentLoaded", function(){
            
    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';

    if(el_autohide){
        
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {
               let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
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
// DOMContentLoaded  end


var swiper = new Swiper('.swipermain', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
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
        delay: 10000,
    },
});


var swiper = new Swiper('.swiperteam', {
    slidesPerView: 'auto', // Set initial slides per view
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2, 
      },
      992: {
        slidesPerView: 3, 
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  // footer
  var swiper = new Swiper('.swiperfooter', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
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
        delay: 5000,
    },
});