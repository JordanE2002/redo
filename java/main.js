



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








document.getElementById('hamburger').addEventListener('click', function (event) {
    const menu = document.getElementById('menu');
    const bodyContent = document.getElementById('body-content');
    const hamburger = document.getElementById('hamburger');

    // Toggle the push effect
    const isOpen = bodyContent.classList.toggle('body-pushed');
    hamburger.classList.toggle('hamburger-active', isOpen);

    // Update accessibility attributes
    hamburger.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', function (event) {
    const menu = document.getElementById('menu');
    const bodyContent = document.getElementById('body-content');
    const hamburger = document.getElementById('hamburger');

    // Close the menu if clicking outside
    if (
        bodyContent.classList.contains('body-pushed') &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        bodyContent.classList.remove('body-pushed');
        hamburger.classList.remove('hamburger-active');
        hamburger.setAttribute('aria-expanded', false);
    }
});

// Close menu on pressing ESC
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const bodyContent = document.getElementById('body-content');
        const hamburger = document.getElementById('hamburger');

        bodyContent.classList.remove('body-pushed');
        hamburger.classList.remove('hamburger-active');
        hamburger.setAttribute('aria-expanded', false);
    }
});

