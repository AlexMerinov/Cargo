document.addEventListener("DOMContentLoaded", () => {

// Header -------------------------------------->   

   const burgerBtn = document.querySelector('.burger-btn');

   if (burgerBtn) {
      burgerBtn.addEventListener('click', () => {
         let headerDT = document.querySelector('.header-desktop');
         burgerBtn.classList.toggle('burger-btn--active');
         headerDT.classList.toggle('header-desktop--active');
      });
   }
   if (document.body.clientWidth < 768) {
      openHeaders = document.querySelectorAll('.footer-col__header');
   
   openHeaders.forEach((openHeader) => {
      openHeader.addEventListener('click', listOpen);
   });
   
      function listOpen(e) {
         let currentItem = e.target.closest('.footer-col__header');
         let currentList = e.target.nextElementSibling;
         currentItem.classList.toggle('footer-col__header--active');
         if (currentItem.classList.contains('footer-col__header--active')) {
            currentList.style.maxHeight = currentList.scrollHeight + "px";
         } else {
            currentList.style.maxHeight = 0;
         }
      }
   }

 /*-----------------Slider top-------------------------------*/

   if (document.body.clientWidth < 1378) {
      const topSlider = new Swiper('.top-slider__swiper', { 

         slidesPerView: 4,

         breakpoints: {
            788: {
                slidesPerView: 6,
            },
        }
      });
   }

   /*-----------------Slider categories-------------------------------*/

   const promoSlider = new Swiper('.promo-carusel__slider', { 

      slidesPerView: 1,
      spaceBetween: 5,

      navigation: {
         nextEl: '.promo-carusel__btn--next',
         prevEl: '.promo-carusel__btn--prev',
      },

      pagination: {
         el: '.promo-carusel__pagination',
         clickable: true,
      },
      

   });

   const specifucate = new Swiper('.spec-slider', { 

      slidesPerView: 1,

      navigation: {
         nextEl: '.spec-slider__btn--next',
         prevEl: '.spec-slider__btn--prev',
      },
      
      breakpoints: {
         // when window width is <= 499px
         788: {
             slidesPerView: 3,
         },
         // when window width is <= 999px
         1378: {
             slidesPerView: 4,
         }
     }

   });

   const sliderReviews = new Swiper('.reviews-slider', { 

      slidesPerView: 2,
      spaceBetween: 15,

      navigation: {
         nextEl: '.reviews__slider-btn--next',
         prevEl: '.reviews__slider-btn--prev',
      },
      
      breakpoints: {
         // when window width is <= 499px
         788: {
             slidesPerView: 3,
         },
     }

   });

   const advantagesTabs = document.querySelectorAll('.advantages-box');
   if (advantagesTabs) {

      advantagesTabs.forEach((advantagesTab) => {

         const tabsBtn   = advantagesTab.querySelectorAll(".advantages-pagination__btn");
         const tabsItems = advantagesTab.querySelectorAll('.advantages-content__item');
      
         tabsBtn.forEach(function(item) {
            item.addEventListener("click", function() {

               let currentBtn = item;
               let tabId      = currentBtn.getAttribute("data-tab");
               let currentTab = document.querySelector(tabId);
      
               tabsBtn.forEach(function(item) {
                  item.classList.remove('advantages-pagination__btn--active');
               });
      
               tabsItems.forEach(function(item) {
                  item.classList.remove('advantages-content__item--active');
               });
      
               currentBtn.classList.add('advantages-pagination__btn--active');
               currentTab.classList.add('advantages-content__item--active');
               
            });
         });

      });
   
   }

   if (document.body.clientWidth < 768) {
      const accessoriesSlider = new Swiper('.accessories-slider', { 

         slidesPerView: 2.1,
         spaceBetween: 10,
      });
   }
});



