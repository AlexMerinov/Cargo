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

   
// SEO-text dropbox -------------------------------------->

   const ShowMoreButtons = document.querySelectorAll('.text__link');
   const textHide = document.querySelector('.js-text-hide');
   
   if (ShowMoreButtons) {
      ShowMoreButtons.forEach((ShowMoreButton) => {
         ShowMoreButton.addEventListener("click", function () {
            let textVisibles = document.querySelectorAll(".text__invisible");
            textVisibles.forEach(function (textVisible) {
               textVisible.classList.toggle('text__invisible--active');
               if (textVisible.classList.contains('text__invisible--active')) {
                  textVisible.style.maxHeight = textVisible.scrollHeight + "px";
                  ShowMoreButton.innerHTML = 'Свернуть';
                  textHide.classList.add('js-text-hide--no-icon');
               } else {
                  textVisible.style.maxHeight = 0;
                  ShowMoreButton.innerHTML = 'Развернуть';
                  textHide.classList.remove('js-text-hide--no-icon');
               }
            })
         })
      });
   }

// RangeSlider -------------------------------------->

   const rangeSlider = document.getElementById('range-slider');

   if (rangeSlider) {

      noUiSlider.create(rangeSlider, {
         start: [80, 8000000],
         connect: true,
         step: 1,
         range: {
            'min': [80],
            'max': [8000000]
         },
      });

      const input0 = document.getElementById('input-0');
      const input1 = document.getElementById('input-1');
      const inputs = [input0, input1];

      rangeSlider.noUiSlider.on('update', function (values, handle) {
         inputs[handle].value = (values[handle]);
      });

      const setRangeSlider = (i, value) => {
         let arr = [null, null];
         arr[i] = value;

         rangeSlider.noUiSlider.set(arr);
      };

      inputs.forEach((el, index) => {
         el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value)
         });
      });
   }

// anchors choise item in header list

   const choiceAnchors = document.querySelectorAll('.choice__input');

   for (let i = 0, len = choiceAnchors.length; i < len; i++) {
      let thisAnchor = choiceAnchors[i];
      let nameTitle = document.querySelector('.drop-down__name').textContent;
      thisAnchor.onclick = newTitle;
      let checkedArray = [];

      function newTitle() {
         if (thisAnchor.checked) {
            let activeAnchor = this.closest('.choice').querySelector('.choice__name').textContent;
            let dropDownName = this.closest('.drop-down__item').querySelector('.drop-down__name');
            checkedArray.push(activeAnchor);
            dropDownName.innerHTML = checkedArray;
            console.log(checkedArray);
         } else {
            let activeAnchor = this.closest('.choice').querySelector('.choice__name').textContent;
            let dropDownName = this.closest('.drop-down__item').querySelector('.drop-down__name');
            checkedArray.splice(activeAnchor);
            dropDownName.innerHTML = nameTitle;
         };
      };
   }

/*custom input number-------------------------------->*/
   const quantityValue = document.querySelector('.input-value');
   const valueBtnsMunus = document.querySelector('.btn-value--prev');
   const valueBtnsPlus = document.querySelector('.btn-value--next');

   if (quantityValue) {
      valueBtnsMunus.addEventListener('click', function () {
         if (quantityValue.value > 0) {
            quantityValue.value = quantityValue.value - 1;
         }
      });
      valueBtnsPlus.addEventListener('click', function () {
         quantityValue.value = +quantityValue.value + 1;
      });
   }


   /*-----------------Slider categories-------------------------------*/

   const itemCaruselBig = new Swiper('.carusel-big__slider', { 

      slidesPerView: 1,
      spaceBetween: 10,

      thumbs: {
         swiper: {
            el: '.carusel-mini__slider',
            slidesPerView: 1,
            spaceBetween: 10,
            breakpoints: {
               768: {
                  slidesPerView: 3,
               }
            },

            navigation: {
               nextEl: '.carusel-mini__btn--next',
               prevEl: '.carusel-mini__btn--prev',
            },
         }
      }

   });

   /*-----------------light box-------------------------------*/

   
});

