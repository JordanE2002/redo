



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


document.addEventListener('DOMContentLoaded', () => {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const manageConsentButton = document.getElementById('consent');
    const blockingOverlay = document.getElementById('blocking-overlay');

    // Function to hide the popup and overlay
    function hidePopup() {
        cookiePopup.style.display = 'none';
        blockingOverlay.style.display = 'none';
        enablePageInteractions(); // Enable interactions after accepting
    }

    // Function to show the popup and overlay
    function showPopup() {
        cookiePopup.style.display = 'block';
        blockingOverlay.style.display = 'block';
    }

    // Disable page interactions by adding overlay
    function disablePageInteractions() {
        blockingOverlay.style.display = 'block';
    }

    // Enable page interactions by hiding overlay
    function enablePageInteractions() {
        blockingOverlay.style.display = 'none';
    }

    // Check if cookies have already been accepted
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        hidePopup();
    } else {
        showPopup();
        disablePageInteractions(); // Prevent interaction until consent is given
    }

    // Event listener for accepting cookies
    acceptCookiesButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        hidePopup();
    });

    // Event listener for managing consent
    manageConsentButton.addEventListener('click', () => {
        showPopup();
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











// Toggle the menu and the hamburger icon when clicked
document.getElementById('hamburger').addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var hamburger = document.getElementById('hamburger');
    var bodyContent = document.getElementById('body-content'); // Assuming 'body-content' wraps the main content

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.add('hidden');
        hamburger.classList.remove('hamburger-active'); // Remove X transformation
        bodyContent.classList.remove('pushed-left'); // Remove the push effect
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('open');
        hamburger.classList.add('hamburger-active'); // Add X transformation
        bodyContent.classList.add('pushed-left'); // Add the push effect
    }
    event.stopPropagation(); // Prevent click propagation
});

// Close the menu when clicking anywhere outside of the menu or hamburger
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var hamburger = document.getElementById('hamburger');
    var bodyContent = document.getElementById('body-content'); // Assuming 'body-content' wraps the main content

    // Check if the click was outside the menu and hamburger
    if (menu.classList.contains('open') && !menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('open');
        menu.classList.add('hidden');
        hamburger.classList.remove('hamburger-active'); // Reset the hamburger icon
        bodyContent.classList.remove('pushed-left'); // Remove the push effect
    }
});
