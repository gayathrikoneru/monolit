var dot1 = document.querySelector('.dot1');
var dot2 = document.querySelector('.dot2');
var dot3 = document.querySelector('.dot3');
var prevSlide = document.querySelector('.prev-slide');
var nextSlide = document.querySelector('.next-slide');

// dot1.addEventListener('click', currentSlide(1));
// dot2.addEventListener('click', currentSlide(2));
// dot3.addEventListener('click', currentSlide(3));
// prevSlide.addEventListener('click', plusSlides(-1));
// nextSlide.addEventListener('click', plusSlides(1));

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-img-holder");
  var dots = document.getElementsByClassName("slider-dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}