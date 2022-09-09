document.addEventListener("DOMContentLoaded", () => {

   // body lock--------------------------------------> 
      
   if (document.body.clientWidth < 1366) {

      // Header -------------------------------------->   
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

      
      // Menu header---------------------------------------------->
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
               body.classList.add('lock');
            }
         });

         closeBtn.addEventListener('click', function () {
            header.classList.remove('go-js-header');
            if (!header.classList.contains('go-js-header')) {
               bergerMenu.classList.remove('burger-menu--active');
               mobileMenu.classList.remove('mobile-menu--active');
               body.classList.remove('lock');
            }
         });
      }
   }

   //main slider---------------------------------------------------->

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
   
   //end project slider----------------------------------->

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

      //show more btn in about us block------------------------------------------>
   
      const textBlock = document.querySelector('.about__text');
      if (!textBlock) retutn; 
         const showMoreBtn = document.querySelector('.go-js-show-btn');
         showMoreBtn.addEventListener('click', textOpen);
      
      if (textBlock.scrollHeight >= 268) {
         showMoreBtn.style.display = "block"
         function textOpen(e) {
            let btnElement = e.target.closest('.go-js-show-btn');
            let textBoxElement = btnElement.previousElementSibling;
            btnElement.classList.toggle('go-js-show-btn--active');
            if (btnElement.classList.contains('go-js-show-btn--active')) {
                  textBoxElement.style.maxHeight = textBoxElement.scrollHeight + "px";
               } else {
                  textBoxElement.style.maxHeight = 268 + "px";
            }
         } 
      } else {
         showMoreBtn.style.display = "none";
      }

         //drop box menu navigation Footer----------------------------------->

      const headerBtns = document.querySelectorAll('.go-js-header-btn');
      
      if (!headerBtns) retutn; 
      
      headerBtns.forEach((headerBtn) => {
         headerBtn.addEventListener('click', menuOpen)
      });

      function menuOpen(e) {
         let openBtn = e.target.closest('.go-js-header-btn')
         let openList = e.target.nextElementSibling;
         openBtn.classList.toggle('footer-nav__header--active');
         if (openBtn.classList.contains('footer-nav__header--active')) {
            openList.style.maxHeight = openList.scrollHeight + "px";
         } else {
            openList.style.maxHeight = 0;
         }
      }
   }

   //counter---------------------------------------------->

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

   // ----------------------------mask---------------------------------------
   const elements = document.querySelectorAll('.go-js-phone-mask'); 
   elements.forEach((element) => {
      let maskOptions = {
         mask: '+{7}(000)000-00-00'
      };
      let mask = IMask(element, maskOptions);
   })

   /*----------------------------- Popup ---------------------------------*/
   const body = document.querySelector('body');

   const openPopup = (popupName) => {
      const popups = document.querySelectorAll('.go-js-popup');
      if (!popups) return;
      popups.forEach((popup) => {
         if (popup.dataset.popupName == popupName) {
            popup.classList.add('body__popup--active');
            body.classList.add('lock');
         }

         const closePopups = document.querySelectorAll('.go-js-close-popup');
         if (!closePopups) return;
         closePopups.forEach((closePopup) => {
            closePopup.addEventListener("click", (event) => {
               if (popup.classList.contains('body__popup--active')) {
                  popup.classList.remove('body__popup--active');
                  body.classList.remove('lock');
               }
            });
         });

      });
   }

   const popupButtons = document.querySelectorAll('.go-js-open-popup');
   if (!popupButtons) return;
   popupButtons.forEach((popupButton) => {
      popupButton.addEventListener("click", (event) => {
         event.preventDefault();
         openPopup(popupButton.dataset.popupName);
      });
   });

   //drop Calculate----------------------------------->

   // drop-box

   const choiceHeaders = document.querySelectorAll('.go-js-choice-header');

   if (!choiceHeaders) retutn; 
   
   choiceHeaders.forEach((choiceHeader) => {
      choiceHeader.addEventListener('click', menuOpen)
   });

   function menuOpen(e) {
      let choiceTitle = e.target.closest('.go-js-choice-header')
      let choiceList = e.target.nextElementSibling;
      choiceTitle.classList.toggle('calc-choice__header--active');
      if (choiceTitle.classList.contains('calc-choice__header--active')) {
         choiceList.style.maxHeight = choiceList.scrollHeight + "px";
      } else {
         choiceList.style.maxHeight = 0;
      }
   }


   // choice truck

   const trackChoices = document.querySelectorAll('.go-js-coice-track');
   if (!trackChoices) return;

   trackChoices.forEach((trackChoice) => {
      const tabsBtn = trackChoice.querySelectorAll(".go-js-coice-tab");
      const tabsItems = trackChoice.querySelectorAll('.go-js-coice-content');

      tabsBtn.forEach(function (item) {
         item.addEventListener("click", function () {
            let currentBtn = item.getAttribute("data-tab");
            tabsItems.forEach(function(item) {
               if (item.id == currentBtn) {
                  item.classList.add('choice-truck__preview--active');
               } else {
                  item.classList.remove('choice-truck__preview--active');
               }
            });
         });
      });
   });


   // anchors choise item in header list

   const cityAnchors = document.querySelectorAll('.go-js-choice-item')
   if (!cityAnchors) return;

   cityAnchors.forEach((cityAnchor) => {
      const choiceName   = document.querySelector('.calc-choice__name').textContent;
      const thisAnchor   = cityAnchor.querySelector('.choice-element__input');
      cityAnchor.onclick = newTitle;

      function newTitle() {
         if (thisAnchor.checked) {
            let activeAnchor    = this.querySelector('.choice-element__name').textContent;
            let choiceTitleName = this.closest('.calc-choice').querySelector('.calc-choice__name');
            choiceTitleName.innerHTML = activeAnchor;
         } else {
            let choiceTitleName = this.closest('.calc-choice').querySelector('.calc-choice__name');
            choiceTitleName.innerHTML = choiceName;
         }
      }
 
   })

   // Question list

   const questionBtns = document.querySelectorAll('.go-js-question-btn');
   if (!questionBtns) return;

   questionBtns.forEach((questionBtn) => {
      questionBtn.addEventListener("click", tabsOpen)
   })

   function tabsOpen(e) {
      let currentItem = e.target.closest('.question-list__item');
      let listItem = e.target.closest('.question-list');
      let currentList = e.target.nextElementSibling;
      if (document.body.clientWidth < 1366) {
         currentItem.classList.toggle('question-list__item--active');
         if (currentItem.classList.contains('question-list__item--active')) {
            currentList.style.maxHeight = currentList.scrollHeight + "px";
         } else {
            currentList.style.maxHeight = 0;
         }
      }
      if (document.body.clientWidth > 1366) {
         activeItems = listItem.querySelectorAll('.question-list__item--active');
         activeItems.forEach((activeItem) => {
            activeItem.classList.remove('question-list__item--active');
         })
         currentItem.classList.add('question-list__item--active');  
      }
   }

});
