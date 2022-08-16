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


// RangeSlider -------------------------------------->

   // const rangeSlider = document.getElementById('range-slider');

   // if (rangeSlider) {

   //    noUiSlider.create(rangeSlider, {
   //       start: [80, 8000000],
   //       connect: true,
   //       step: 1,
   //       range: {
   //          'min': [80],
   //          'max': [8000000]
   //       },
   //    });

   //    const input0 = document.getElementById('input-0');
   //    const input1 = document.getElementById('input-1');
   //    const inputs = [input0, input1];

   //    rangeSlider.noUiSlider.on('update', function (values, handle) {
   //       inputs[handle].value = (values[handle]);
   //    });

   //    const setRangeSlider = (i, value) => {
   //       let arr = [null, null];
   //       arr[i] = value;

   //       rangeSlider.noUiSlider.set(arr);
   //    };

   //    inputs.forEach((el, index) => {
   //       el.addEventListener('change', (e) => {
   //          setRangeSlider(index, e.currentTarget.value)
   //       });
   //    });
   // }

// anchors choise item in header list


   /*-----------------Slider categories-------------------------------*/

   const promoSlider = new Swiper('.promo-carusel__slider', { 

      slidesPerView: 1,
      spaceBetween: 5,

      navigation: {
         nextEl: '.promo-carusel__btn--next',
         prevEl: '.promo-carusel__btn--prev',
      },

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



