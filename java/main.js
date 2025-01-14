let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  const offset = -slideIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

setInterval(showSlides, 4000); // Change slide every 4 seconds
