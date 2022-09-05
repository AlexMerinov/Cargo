document.addEventListener("DOMContentLoaded", () => {

   // body lock--------------------------------------> 

   // Header -------------------------------------->   
      
   if (document.body.clientWidth < 1366) {
      openHeaders = document.querySelectorAll('.h-nav__header');

   openHeaders.forEach((openHeader) => {
      openHeader.addEventListener('click', listOpen);
   });

      function listOpen(e) {
         let currentItem = e.target.closest('.h-nav__header');
         let currentList = e.target.nextElementSibling;
         currentItem.classList.toggle('h-nav__header--active');
         if (currentItem.classList.contains('h-nav__header--active')) {
            currentList.style.maxHeight = currentList.scrollHeight + "px";
            currentItem.style.paddingBottom = '10' + "px";
         } else {
            currentList.style.maxHeight = 0;
            currentItem.style.paddingBottom = 0;
         }
      }
   }

   // Menu header---------------------------------------------->

   if (document.body.clientWidth < 1366) {
      bergerMenu = document.querySelector('.burger-menu');
      header     = document.querySelector('.header');
      closeBtn   = document.querySelector('.mobile-menu__close');
      mobileMenu = document.querySelector('.mobile-menu');
   
      if (header) {
         bergerMenu.addEventListener('click', function () {
            header.classList.add('go-js-header');
            if (header.classList.contains('go-js-header')) {
               bergerMenu.classList.add('burger-menu--active');
               mobileMenu.classList.add('mobile-menu--active');
            }
         });
   
         closeBtn.addEventListener('click', function () {
            header.classList.remove('go-js-header');
            if (!header.classList.contains('go-js-header')) {
               bergerMenu.classList.remove('burger-menu--active');
               mobileMenu.classList.remove('mobile-menu--active');
            }
         });
      }
   }


   //main slider

   const mainSlider = new Swiper('.main-slider__box', {
      slidesPerView: 1.2,
      spaceBetween: 7,

      breakpoints: {
         768: {
           slidesPerView: 2.5,
         },
         1366: {
           slidesPerView: 4.1,
         },
         1920: {
           slidesPerView: 5,
         }
       }
   });
   
      //main slider
   if (document.body.clientWidth < 768) {
      const projectSlider = new Swiper('.end-project-swiper', {
         slidesPerView: 1,
         spaceBetween: 5,
         pagination: {
            el: '.end-project-pagination',
            type: 'bullets',
            clickable: true,
         },
      });
   }

   //counter

   const time          = 2000;
   const step          = 1;
   const counterBox    = document.getElementById('counter');
   const countElements = document.querySelectorAll('.desc-box__count');
   if (counterBox) {
      window.addEventListener("scroll", function () {
         const animItemOffset = counterBox.getBoundingClientRect();
         const scrollTop = document.body.scrollTop + animItemOffset.top;
         if (scrollTop < 0 + 200) {
               countElements.forEach((countElement) => {
                  function outNum () {
                     let n = 0;
                     const num = countElement.getAttribute('data-num');
                     let t = Math.round(time / (num / step));
                        let interval = setInterval(() => {
                           n = n + step;
                           if (n == num) {
                              clearInterval(interval);
                           }
                           countElement.innerHTML = n;
                        },
                     t);
                  }
                  outNum();
               });
         }
      });
   }
   
});



