document.addEventListener("DOMContentLoaded", () => {

// Footer menu list -------------------------------------->   

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
   
   if (ShowMoreButtons) {
      ShowMoreButtons.forEach((ShowMoreButton) => {
         ShowMoreButton.addEventListener("click", function () {
            let textVisibles = document.querySelectorAll(".text__invisible");
            textVisibles.forEach(function (textVisible) {
               textVisible.classList.toggle('text__invisible--active');
               if (textVisible.classList.contains('text__invisible--active')) {
                  textVisible.style.maxHeight = textVisible.scrollHeight + "px";
                  let open = ShowMoreButtons[0].textContent;
                  open.innerHTML = "123";
                  console.log(open);
               } else {
                  textVisible.style.maxHeight = 0;
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


/*-----------------Main slider Banner-------------------------------*/

   const mainSlider = new Swiper('.main-slider', { 
      // If we need pagination
      pagination: {
         el: '.main-slider__pagination',
         clickable: true,
      },

      autoplay: {
         delay: 3000,
      },

      speed: 1000,
      effect: 'fade',
   
   });

/*-----------------Slider brands-------------------------------*/

   const brandSlider = new Swiper('.brands-carusel', { 

      slidesPerView: 1.5,

      breakpoints: {
         1366: {
            slidesPerView: 5,
         },
         768: {
            slidesPerView: 3,
         },
      }

   });

/*-----------------Slider categories-------------------------------*/

   const categoriesSlider = new Swiper('.categories-slider', { 

      slidesPerView: 1.2,
      spaceBetween: 20,

      navigation: {
         nextEl: '.categories-slider__btn--next',
         prevEl: '.categories-slider__btn--prev',
      },

      breakpoints: {
         1366: {
            slidesPerView: 4,
         },
         768: {
            slidesPerView: 3,
         },
      }

   });

   /*-----------------Slider good-info-------------------------------*/

   const goodInfoSlider = new Swiper('.good-info-slider', { 

      slidesPerView: 2.2,
      spaceBetween: 20,

      navigation: {
         nextEl: '.good-info__btn--next',
         prevEl: '.good-info__btn--prev',
      },

      breakpoints: {
         1366: {
            slidesPerView: 4,
         },
         768: {
            slidesPerView: 3,
         },
      }

   });
});

