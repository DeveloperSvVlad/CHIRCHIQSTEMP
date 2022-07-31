document.addEventListener('DOMContentLoaded', () => {


let sliderMain = document.querySelectorAll('.slider-main');
let sliderTrust = document.querySelector('.trust__slider');
let sliderWorks = document.querySelector('.works__slider');
let sliderWorksInner = document.querySelectorAll('.js-work-inner-slider');
if (sliderMain) {
    sliderMain.forEach((el) => {
        var mySwiper = new Swiper(el, {
            slidesPerColumnFill: "row",
            observer: true,
            observeSlideChildren: true,
            observeParents: true,
            slidesPerView: 1.2,
            slidesPerColumn: 2,
            spaceBetween: 20,
            grabCursor: true,
            navigation: {
                nextEl: el.querySelector('.slider-main__next'),
                prevEl: el.querySelector('.slider-main__prev'),
            },
            breakpoints: {
                1200: {
                    spaceBetween: 40,
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                },
                767: {
                    slidesPerView: 2.5,
                    slidesPerColumn: 2,
                    spaceBetween: 20,
                },
                575: {
                    slidesPerView: 2.2,
                    slidesPerColumn: 2,
                    spaceBetween: 20,
                }
            }
        })
    })
}
if(sliderTrust) {
    var mySwiper = new Swiper(sliderTrust, {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            767: {
                slidesPerView: 3,
            },
            575: {
                slidesPerView: 2,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
}

if (sliderWorks) {
    var mySwiper = new Swiper(sliderWorks, {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            575: {
                slidesPerView: 2,
            },
        },
        navigation: {
            nextEl: '.js-works-next',
            prevEl: '.js-works-prev',
        },
    })
}

if (sliderWorksInner) {
    sliderWorksInner.forEach((el) => {
        var mySwiper = new Swiper(el, {
            slidesPerView: 1,
            grabCursor: true,
            nested: true,
            navigation: {
                nextEl: el.querySelector('.js-work-inner-slider-next'),
                prevEl: el.querySelector('.js-work-inner-slider-prev'),
            },
        })
    })
   
}
let productsThumb = new Swiper(".slider-produce__thumb .swiper-container", {
    slidesPerView: 3,
    direction: "vertical",
    spaceBetween: 16,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: { 
			direction: 'horizontal', 
		},
		767: { 
			direction: 'vertical', 
		}
      }
});
let productsMain = new Swiper(".slider-produce__main .swiper-container", {
    spaceBetween: 20,
    thumbs: {
      swiper: productsThumb,
    },
});

const btnUp = document.querySelector('.js-up-arrow');
btnUp.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
})
// // Mega menu 
var bodyGlobal = document.querySelector('body');
//? Burger Menu and Link ------------------------------------------------>>>>>>
const body = document.querySelector('body'),
  menuButton = document.querySelector('.burger'),
  menu = document.querySelector('.header__nav');
  
function closeBurger() {
    menuButton.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('body-lock');
}
function openBurger() {
    menuButton.classList.add('active');
    menu.classList.add('active');
    body.classList.add('body-lock');
}
if (document.querySelectorAll('.burger').length > 0) {
    menuButton.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            closeBurger();
        } else if (!this.classList.contains('active')) {
             openBurger();
        }
  });
}
const tabsBtn = document.querySelectorAll('.js-tabs-btn');
const tabsItem = document.querySelectorAll('.js-tabs-content');
if (tabsBtn) {
    const onTabClick = (item) => {
        item.addEventListener('click', () => {
            let curentBtn = item;
            let tabId = curentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);
            
            if (!curentBtn.classList.contains('active')){
                tabsBtn.forEach((item) => {
                    
                    item.classList.remove('active');
                })
                tabsItem.forEach((item) => {
                    item.classList.remove('active');
                })
        
                curentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
           
        })
    }
    tabsBtn.forEach(onTabClick);
}


// Value change price 
const btn = document.querySelectorAll('.js-total-change');
let total = document.querySelector('.js-total-price');
btn.forEach(el => {
    el.addEventListener('click', (event) => {
        btn.forEach(item => item.classList.remove('active'))
        if (!el.classList.contains('active')) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
        event.preventDefault();
        const test = el.getAttribute('data-value');
        total.innerHTML = test + ' сум';
    })
})
// Scroll link
$('.js-scroll-link').on('click', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top - 120;
    $('body,html').animate({scrollTop: top}, 300);
})

})