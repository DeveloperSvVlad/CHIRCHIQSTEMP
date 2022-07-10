
let sliderMain = document.querySelectorAll('.slider-main');
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
