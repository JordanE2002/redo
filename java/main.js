$(document).ready(function(){
  $('.slides').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,

      appendDots: $('.slides'),
      
  });
});






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
