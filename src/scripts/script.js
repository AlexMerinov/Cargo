if (document.body.clientWidth < 768) {
   openHeaders = document.querySelectorAll('.footer-col__header');

openHeaders.forEach((openHeader) => {
   openHeader.addEventListener('click', listOpen);
});

function listOpen(e) {
   e.preventDefault();
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
