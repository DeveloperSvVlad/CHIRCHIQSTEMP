
// // Mega menu 
// var bodyGlobal = document.querySelector('body');
// const megaMenu = document.querySelector('.mega-menu');
// const menuCatalog = document.querySelector('.js-catalog-toggle');
// const btnCloseMenu = document.querySelector('.js-menu-close');

// //? Burger Menu and Link ------------------------------------------------>>>>>>
// const body = document.querySelector('body'),
//   menuButton = document.querySelector('.burger'),
//   menu = document.querySelector('.header__bottom');
  
// function closeBurger() {
//     menuButton.classList.remove('active');
//     menu.classList.remove('active');
//     body.classList.remove('body-lock');
// }
// function openBurger() {
//     menuButton.classList.add('active');
//     menu.classList.add('active');
//     body.classList.add('body-lock');
// }

// if (document.querySelectorAll('.burger').length > 0) {
//     menuButton.addEventListener('click', function() {
//         if (this.classList.contains('active')) {
//             closeBurger();
//         } else if (!this.classList.contains('active')) {
//              openBurger();
//         }
//   });
// }
// //? Burger Menu and Link END ------------------------------------------------>>>>>>
// const menuLink = document.querySelectorAll('.nav__link');
//   menuLink.forEach((el) =>  {
//     el.addEventListener('click', (e) => {
      
//     if (el.getAttribute("href") === "#") {
//       e.preventDefault();
//     } else {
//       closeBurger();
//        }
//     })
// })
// function heightHead () {
//     let headerHeight = document.querySelector('.js-head').clientHeight;
//     let menuMain = document.querySelector('.js-menu');
//     if (window.innerWidth > 1200) {
//         menuMain.style.top = `${headerHeight}` + 'px';  
//     } else {
//         menuMain.style.top = '';  
//     }
// }
// function toggleMenu() {
//     megaMenu.classList.toggle('active');
//     bodyGlobal.classList.toggle('body-block');
//     menuCatalog.classList.toggle('active');
//     heightHead();
// }

// menuCatalog.addEventListener('click', toggleMenu);
// btnCloseMenu.addEventListener('click', toggleMenu);

// let timeout;
// $(function () {
//     $('.mega-menu__list > li > .tab-open').on('mouseenter', function () {
//         let thisElement = $(this);
//         if (timeout != null) {
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(function () {
//             $(".mega-menu__content > .tab-content").removeClass('tab-active');
//             $(".mega-menu__content > .tab-content[data-id='" + thisElement.attr('data-id') + "']").addClass("tab-active");
//             $(".mega-menu__list > li >.tab-open").removeClass('opened');
//             thisElement.parent().find(".tab-open").addClass('opened');
//         }, 150);
//     });

//     $('.mega-menu__list > li > .tab-open').on('mouseleave', function () {
//         if (timeout != null) {
//             clearTimeout(timeout);
//             timeout = null;
//         }
//     });
// });

// //! Accordion 
// $(function() {
// 	var Accordion = function(el, multiple) {
// 		this.el = el || {};
// 		this.multiple = multiple || false;
// 		var links = this.el.find('.js-control');
// 		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
// 	}

// 	Accordion.prototype.dropdown = function(e) {
// 		var $el = e.data.el   
// 			$this = $(this),
// 			$next = $this.next();

// 		$next.slideToggle();
//     if (!e.data.multiple) {
//       $el.find('.js-content').not($next).slideUp().parent().removeClass('open');
// 		} 
// 	}	
// 	var accordion = new Accordion($('.js-wrapper-accordion'), false);
// });

// //! Text Ellipsis
// const textEllipsisArr = document.querySelectorAll("[data-text-limit]");
// const textEllipsis = (arr) => {
//     arr.forEach(el => {
//         let text = el.textContent;
//         let textLimit = el.getAttribute('data-text-limit');
//         if (text.length > textLimit * 1) {
//             text = text.substring(0, textLimit);
//             el.textContent = text + "..."
//         }
//     })
// }
// textEllipsis(textEllipsisArr);

// //! Search input modal
// const searchInput = document.querySelectorAll('.js-search');
// const searchModal = document.querySelector('.js-popup-search');
// function showSearchModal () {
//     searchModal.classList.add('active');
//     body.classList.add('body-lock');
// }
// searchInput.forEach(input => {
//     input.addEventListener('click', showSearchModal)
// })
// //! Ratings
// const ratings = document.querySelectorAll('.rating');
// if (ratings.length > 0) {
//     initRatings();
// }
// // Основная функция
// function initRatings() {
//     let ratingActive, ratingValue;
//     // Пробегаемся по всем рейтингам на странице
//     for (let index = 0; index < ratings.length; index++) {
//         const rating = ratings[index];
//         initRating(rating);
//     }
//     //Инициализируем конкретный рейтинг
//     function initRating(rating) {
//         initRatingVars(rating);
//         setRatingActiveWidth();
//         if (rating.classList.contains('rating__set')) {
//             setRaiting(rating)
//         }
//     }
  
//     //Инициализация переменных
//     function initRatingVars(rating) {
//         ratingActive = rating.querySelector('.rating__active');
//         ratingValue = rating.querySelector('.rating__value');
//       }
//     //Изменяем ширину активных звезд
//     function setRatingActiveWidth(index = ratingValue.innerHTML) {
//         const ratingActiveWidth = index / 0.05;
//         ratingActive.style.width = `${ratingActiveWidth}%`;    
//     }
//     // Возможность указывать оценку
//     function setRaiting (rating) {
   
//       const ratingItems = rating.querySelectorAll('.rating__item');
//         for (let index = 0; index < ratingItems.length; index++) {
//             const ratingItem = ratingItems[index];
            
//             ratingItem.addEventListener('mouseenter', function (e) {
//               // Обновляем переменные
//               initRatingVars(rating);
//               // Обновление активных звезд
//               setRatingActiveWidth(ratingItem.value);
//               console.log(ratingItem.value);
              
//             })
           
//             ratingItem.addEventListener('mouseleave', function (e) {           
//                 // Обновление активных звезд
//                 setRatingActiveWidth();
//             })

//             ratingItem.addEventListener('click', function (e) {
//                   // Обновляем переменные
//                   initRatingVars(rating);
//                   ratingValue.innerHTML = index + 1;
//                   setRatingActiveWidth();
//             })
//         }
//     }
// }


// //????? Modal window -------------------------------------------->>>>>>>
// ;(function() {
//     var body = document.querySelector('body');
//         var closestItemByClass = function(item, className) {
//             var node = item;
//             while(node) {
//                 if (node.classList.contains(className)) {
//                     return node;
//                 }
//                 node = node.parentElement;
//             }
//             return null;
//         };
//         var closestAttr = function(item, attr) {
//             var node = item;
//             while(node) {
//                 var attrValue = node.getAttribute(attr);
//                 if (attrValue) {
//                     return attrValue;
//                 }
//                 node = node.parentElement;
//             }
//             return null;
//         };
  
  
//     //! Открытие попапа
//     var showPopup = function (target) {
//         target.classList.add('active');
//     }
//     //! Закрытие попапа
//     var closePopup = function (target) {
//         target.classList.remove('active');
//     }
//     body.addEventListener('click', function (e) {
//         var target = e.target;
//         var popupClass =  closestAttr(target, 'data-popup');
//         if (popupClass === null) {
//             return;
//         }
//         e.preventDefault();
//         var popup = document.querySelector('.' + popupClass);
  
//         if (popup) {
//             showPopup(popup);
//             body.classList.add('body-lock')
//         } 
//     })
    
//     //! Закрытие по ESQ
//     body.addEventListener('keydown', function (e) {
//        if (e.keyCode !==27) {
//            return;
//        }
//        var popup = document.querySelector('.popup.active')
//        if (popup)  {
//            closePopup(popup);
//            body.classList.remove('body-lock');
//        }
//     })
    
//     //! Закрытие вне contenta (по крестики и по области)
//     body.addEventListener('click', function (e) {
//        var target = e.target;
//        if (target.classList.contains('popup__btn-close') || target.classList.contains('popup__inner')) {           
//             var  popup  = closestItemByClass(target, 'popup');
//             closePopup(popup);
//             body.classList.remove('body-lock');
//        }
//      })
// }) ();

// const productClickBtn = document.querySelector('.js-product-click-btn');
// productClickBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('.js-popup-product').classList.remove('active');
// })

// //????? Modal window END -------------------------------------------->>>>>>>

// //? Swiper иницилизация и первоначальные настройки ---------------------------------->>>>
// let slider = document.querySelector('.slider')
// if (slider) {
//     const mySwiper = new Swiper(slider, {
//         loop: true,
//         slidesPerView: 1,
//         speed: 1000,
//         autoplay: {
//             delay: 10000,
//         },
//         observer: true,
//         grabCursor: true,
//         navigation: {
//             nextEl: '.slider-arrow-next',
//             prevEl: '.slider-arrow-prev',
//           },
//           pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//           },
//     });
// }

// let sliderOrders = document.querySelectorAll('.js-order-slider')
// if (sliderOrders) {
//     sliderOrders.forEach(el => {
//         const mySwiper = new Swiper(el, {
//             // loop: true,
//             slidesPerView: 3,
//             speed: 1000,
//             spaceBetween: 45,
//             autoplay: {
//                 delay: 10000,
//             },
//             observer: true,
//             grabCursor: true,
//             navigation: {
//                 nextEl: el.querySelector('.slider-arrow-next'),
//                 prevEl: el.querySelector('.slider-arrow-prev'),
//             },
//             breakpoints: {
//                 992: {
//                     slidesPerView: 3,
//                 },
//                 1: {
//                     slidesPerView: 2,
//                 }
//             }
//         });
//     })
// }

// let chechSliderPopupAndProduct = document.querySelectorAll('.product__slider-container');
// chechSliderPopupAndProduct.forEach(item => {
//     var thumbsProduct = new Swiper(item.querySelector(".js-slider-product-thumbs"), {
//         spaceBetween: 10,
//         slidesPerView: 3,
//         direction: "vertical",
//         slideToClickedSlide: true,
//         observer: true,
//         observeParents: true
//     });    
//     var sliderProduct = new Swiper(item.querySelector(".js-slider-product-main"), {
//         slidesPerView: 1,
//         observer: true,
//         observeParents: true,
//         thumbs: {
//             swiper: thumbsProduct
//         },
//     });      
// })

// //????? Fly btn ---------------------------------->>>>>>>>>>>>>>>>>>
// const flyBtn = document.getElementById('fly-btn');
// // Клик по кнопке летим наверх
// if (flyBtn) {
//     flyBtn.addEventListener('click', () => {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//     })
    
//     window.onscroll = () => {scrollFunction()};
//     // Функция появление кнопки при скролле и убирание
//     const scrollFunction = () => {
//         if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
//             flyBtn.style.opacity = "1", 
//             flyBtn.style.transition = '.5s';
//         } else {
//             flyBtn.style.opacity = "0", 
//             flyBtn.style.transition = '.5s';
//         }
//     }
// }
// //????? Fly btn END---------------------------------->>>>>>>>>>>>>>>>>>

// //??? Tabs   -------------------------------------->>>>>>
// const tabsBtn = document.querySelectorAll('.js-tabs-btn');
// const tabsItem = document.querySelectorAll('.tabs-content');
// if (document.querySelectorAll('.js-tabs-btn').length > 0) {
//     const onTabClick = (item) => {
//         item.addEventListener('click', () => {
//             let curentBtn = item;
//             let tabId = curentBtn.getAttribute('data-tab');
//             let currentTab = document.querySelector(tabId);
            
//             if (!curentBtn.classList.contains('active')){
//                 tabsBtn.forEach((item) => {
                    
//                     item.classList.remove('active');
//                 })
//                 tabsItem.forEach((item) => {
//                     item.classList.remove('active');
//                 })
        
//                 curentBtn.classList.add('active');
//                 currentTab.classList.add('active');
//             }
           
//         })
//     }
    
//     tabsBtn.forEach(onTabClick);
//     document.querySelector('.js-tabs-btn').click();
    
// }
// //??? Tabs END   -------------------------------------->>>>>>


// //? Change input cabinet
// const btnChangeInput = document.querySelectorAll('.js-btn-change');
// btnChangeInput.forEach(item => {
//     item.addEventListener('click', function (event) {
//         event.preventDefault();
//         let target = event.target;
//         let parent = target.closest('.item-cabinet');
//         let input = parent.querySelector('.js-input');
//         let text = parent.querySelector('.item-cabinet__text');
//         if (text.textContent === 'Редактировать') {
//             text.textContent = 'Сохранить';
//             input.focus();
//             input.removeAttribute('readonly');
//             input.classList.add('active');
//         } else {
//             input.classList.remove('active');
//             input.setAttribute('readonly', 'readonly');
//             text.textContent = 'Редактировать'
//         }
//     })
// })



// // Scroll to block
// $('.js-scroll-link').on('click', function (e) {
//     e.preventDefault();
//     var id  = $(this).attr('href'),
//     top = $(id).offset().top - 120;
//     $('body,html').animate({scrollTop: top}, 500);
// })


// // Profile 
// const defaultBtn = document.querySelector("#default-btn");
// const customBtn = document.querySelector("#custom-btn");
// const imageAvatar = document.querySelector('.js-image-avatar');
// const img = document.querySelector(".js-image-avatar img");
// let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

// function defaultBtnActive(){
//   defaultBtn.click();
// }
// if (defaultBtn) {
//   defaultBtn.addEventListener("change", function(){
//     const file = this.files[0];
//     if(file){
//       const reader = new FileReader();
//       reader.onload = function(){
//         const result = reader.result;
//         img.src = result;
//         imageAvatar.classList.remove('profile__avatar--add')
//       }
//       reader.readAsDataURL(file);
//     }
//   });
// }


// const rangeSliderPrice = document.getElementById('js-price-slider');
// if (rangeSliderPrice) {
//     noUiSlider.create(rangeSliderPrice, {
//         start: [14000, 150000],
//         step: 1000,
//         connect: true,
//         range: {
//             'min': [14000],
//             'max': [150000]
//         }
//     });
//     const input0 = document.getElementById('js-price-input-0');
//     const input1 = document.getElementById('js-price-input-1');
//     const inputs = [input0, input1]
//     rangeSliderPrice.noUiSlider.on('update', function (values, handle) {
//         inputs[handle].value = Math.round(values[handle])
        
//     })
// }

// function bindValues(anySLider, inputNumberMin, inputNumberMax){
//     anySLider.noUiSlider.on('update', function( values, handle ) {
//      let value = values[handle];
//      if ( handle ) {
//          inputNumberMax.value = Math.round(value);
//      } else {
//          inputNumberMin.value = Math.round(value);
//      }
//    });
// //    inputNumberMin.addEventListener('change', function(){
// //         anySLider.noUiSlider.set(this.value);
// //    });
// //    inputNumberMax.addEventListener('change', function(){
// //         anySLider.noUiSlider.set(this.value);     
// //    });

// }
// let anySLider = $('.js-any-slider');
// let inputsNumberMin = $('.js-any-input-0');
// let inputsNumberMax = $('.js-any-input-1');
// for ( let i = 0; i < anySLider.length; i++) {
//    noUiSlider.create(anySLider[i], {
//        start: [35, 765],
//        connect: true,
//        step: 10,
//        range: {
//            'min': [35],
//            'max': [765]
//        }
//    });
//    bindValues(anySLider[i], inputsNumberMin[i], inputsNumberMax[i]);
// }


// // change grid product
// const defaultGridBtn = document.querySelector('.js-toggle-default');
// const customGridBtn = document.querySelector('.js-toggle-row');
// const gridItems = document.querySelector('.js-items-grid');
// const toggleItem = document.querySelectorAll('.toggle-content__item');
// toggleItem.forEach(item => {
//     item.addEventListener('click', function () {
//         if (!item.classList.contains('active')) {
//             toggleItem.forEach(el => el.classList.remove('active'))
//             item.classList.add('active')
//         } else {
//             item.classList.remove('active')
//         }
//     })
// })
// if (defaultGridBtn) {
//     customGridBtn.addEventListener('click', function () {
//         gridItems.classList.add('row-grid');
//     })
//     defaultGridBtn.addEventListener('click', function () {
//         gridItems.classList.remove('row-grid');
//     })
// }


// // Open modal filter 
// const btnOpenModal = document.querySelector('.js-open-filter');
// const closeModalFilter = document.querySelector('.js-close-modal-filter');
// if (btnOpenModal) {
//     btnOpenModal.addEventListener('click', function () {
//         document.querySelector('.filter__list').classList.add('show')
//         body.classList.add('body-lock')
//     })
//     closeModalFilter.addEventListener('click', function () {
//         document.querySelector('.filter__list').classList.remove('show');
//         body.classList.add('body-lock');
//     })
// }
