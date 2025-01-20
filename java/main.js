



// Banner Carousel
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



document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header'); // Targets the <header> tag
    let lastScrollTop = 0; // Track the last scroll position
    const threshold = 150; // Distance from the top to start sticky behavior

    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > threshold) {
            if (currentScroll < lastScrollTop) {
                // Scrolling up - Show header with animation
                header.classList.add('sticky', 'show-header');
            } else {
                // Scrolling down - Hide header
                header.classList.remove('show-header');
                setTimeout(() => {
                    if (currentScroll > threshold) { // Ensure header stays hidden if above threshold
                        header.classList.remove('sticky');
                    }
                }, 1000); // Delay before removing the sticky class
            }
        } else {
            // Remove sticky and animation when within threshold
            header.classList.remove('sticky', 'show-header');
        }

        // Update lastScrollTop to the current scroll position
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});




// Sticky Header Functionality

let lastScrollTop = 0;
let header = document.querySelector('header'); // Directly targets the entire <header> tag

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll < lastScrollTop) {
    // Scrolling up
    header.classList.add("sticky");
  } else {
    // Scrolling down
    header.classList.remove("sticky");
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);













// Toggle the menu when the hamburger icon is clicked
document.getElementById('hamburger').addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('open');
    }
    event.stopPropagation(); // Prevent the click from propagating to the document
});

// Close the menu when clicking anywhere outside of the menu or hamburger
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var hamburger = document.getElementById('hamburger');

    // Check if the click was outside the menu and hamburger
    if (menu.classList.contains('open') && !menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('open');
        menu.classList.add('hidden');
    }
});
