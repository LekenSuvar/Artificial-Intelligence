// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)
  
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4.5,
    slidesPerGroup: 2,
    speed: 1000,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    mousewheel: {
        invert: true,
    },
    autoplay: {
        delay: 4000,
    },
    

    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        550: {
            slidesPerView: 1.5,
            slidesPerGroup: 2
        },
        665: {
            slidesPerView: 1.8,
        },
        772: {
            slidesPerView: 2.1,
        },
        920: {
            slidesPerView: 2.5,
        },
        1120: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 3.5,
        },
        1470: {
            slidesPerView: 4,
        },
        1670: {
            slidesPerView: 4.5,
        }
    }
});
