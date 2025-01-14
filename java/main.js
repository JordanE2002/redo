let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

function showSlides(index) {
  if (index >= totalSlides) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex = index;
  }
  
  const offset = -slideIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

function currentSlide(index) {
  showSlides(index);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => currentSlide(index));
});

setInterval(() => showSlides(slideIndex + 1), 4000); // Auto-slide every 4 seconds
