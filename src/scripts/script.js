document.addEventListener("DOMContentLoaded", () => {

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
   
   
   const ShowMoreButtons = document.querySelectorAll('.text__link');
   
   if (ShowMoreButtons) {
      ShowMoreButtons.forEach((ShowMoreButton) => {
         ShowMoreButton.addEventListener("click", function () {
            let textVisibles = document.querySelectorAll(".text__invisible");
            textVisibles.forEach(function (textVisible) {
               textVisible.classList.toggle('text__invisible--active');
               if (textVisible.classList.contains('text__invisible--active')) {
                  textVisible.style.maxHeight = textVisible.scrollHeight + "px";
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
         })
      })
   }

   

});

