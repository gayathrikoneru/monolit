var prevSlide = document.querySelector('.prev-slide');
var nextSlide = document.querySelector('.next-slide');

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var items = document.getElementsByClassName("item");
  if (n > items.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = items.length}
  for (i = 0; i < items.length; i++) {
      items[i].style.display = "none";  
  }
  items[slideIndex-1].style.display = "block";
}