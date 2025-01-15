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










// Wait until the entire document is loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
  
  // Get a reference to the cookie popup element
  const cookiePopup = document.getElementById('cookie-popup');
  
  // Get a reference to the "Accept Cookies" button
  const acceptCookiesButton = document.getElementById('accept-cookies');
  
  // Get a reference to the "Change Settings" button
  const changeSettingsButton = document.getElementById('change-settings');
  
  // Get a reference to the "Manage Consent" button
  const manageConsentButton = document.getElementById('consent');

  // Function to hide the cookie popup
  function hidePopup() {
      cookiePopup.style.display = 'none';  // Sets the popup's display style to 'none', hiding it
  }

  // Function to show the cookie popup
  function showPopup() {
      cookiePopup.style.display = 'block';  // Sets the popup's display style to 'block', making it visible
  }

  // Check if the user has already accepted cookies using localStorage
  if (localStorage.getItem('cookiesAccepted') === 'true') {
      hidePopup();  // If cookies have been accepted, hide the popup immediately
  } else {
      showPopup();  // If cookies haven't been accepted, show the popup
  }

  // Add an event listener to the "Accept Cookies" button
  // When the button is clicked, it stores the user's consent in localStorage and hides the popup
  acceptCookiesButton.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');  // Save the user's consent in localStorage
      hidePopup();  // Hide the popup after the user accepts cookies
  });

  // Add an event listener to the "Manage Consent" button
  // When clicked, it makes the cookie popup appear again
  manageConsentButton.addEventListener('click', () => {
      showPopup();  // Show the cookie popup when the "Manage Consent" button is clicked
  });
});
