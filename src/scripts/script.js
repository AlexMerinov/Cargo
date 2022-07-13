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

document.addEventListener("DOMContentLoaded", () => {
   const slider = document.getElementById('slider');
   const minMaxValue = document.querySelectorAll('.range-slider__value');


   noUiSlider.create(slider, {
      start: [80, 8000000],
      connect: true,
      step: 1,
      range: {
         'min': 80,
         'max': 8000000
      },
   });

   slider.noUiSlider.on('change', (values) => {
      let minValue = values[0];
      let maxValue = values[1];

      minMaxValue[0].value = minValue;
      minMaxValue[1].value = maxValue;
   })

});

