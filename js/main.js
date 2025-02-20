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

// Cookie Consent
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

// Header behavior with sticky/fixed
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header'); // Targets the <header> tag
    const rightMenu = document.querySelector('.right-menu'); // The right menu element
    const hamburger = document.getElementById('hamburger'); // The hamburger button
    let lastScrollTop = 0; // Track the last scroll position
    const threshold = 150; // Distance from the top to start sticky behavior
    let showTimeout; // Variable to store the timeout for showing the header

    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Check if right menu is open (you may want to adjust based on your logic for showing/hiding the menu)
        const isRightMenuOpen = rightMenu.classList.contains('open');

        if (hamburger.classList.contains('hamburger-active')) {
            // When hamburger menu is active, make the header fixed
            header.classList.add('fixed');
            header.classList.remove('sticky');
        } else {
            if (currentScroll > threshold && !isRightMenuOpen) {
                if (currentScroll < lastScrollTop) {
                    // Scrolling up - Show header after a delay
                    if (showTimeout) {
                        clearTimeout(showTimeout); // Clear any existing timeout if the user scrolls up again
                    }

                    // Set timeout to show header after a delay (1 seconds or any delay)
                    showTimeout = setTimeout(() => {
                        header.classList.add('sticky', 'show-header');
                    }, 500); // Delay before showing the header (1 second)
                } else {
                    // Scrolling down - Hide header immediately
                    header.classList.remove('show-header');
                    header.classList.remove('sticky');
                    // Clear any existing show timeout to ensure it doesn't show if scrolling down
                    if (showTimeout) {
                        clearTimeout(showTimeout);
                    }
                }
            } else {
                // Remove sticky and animation when within threshold (at the top of the page)
                header.classList.remove('sticky', 'show-header');
                // Clear any existing show timeout when back to the top
                if (showTimeout) {
                    clearTimeout(showTimeout);
                }
            }
        }

        // Update lastScrollTop to the current scroll position
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});

// Right Menu behavior
document.addEventListener('scroll', function() {
    const rightMenu = document.querySelector('.right-menu');
    const scrollPosition = window.scrollY;  // Get current scroll position

    // Update the 'top' property of the right menu dynamically to scroll down with the page
    rightMenu.style.top = `${scrollPosition}px`;
});

// Toggle Hamburger Menu (open/close behavior)
document.getElementById('hamburger').addEventListener('click', function (event) {
    const bodyContent = document.getElementById('body-content');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('dark-overlay'); // Get overlay element
    const isOpen = bodyContent.classList.toggle('body-pushed');

    // Toggle the hamburger active state
    hamburger.classList.toggle('hamburger-active', isOpen);

    // Toggle the overlay visibility when the menu opens/closes
    overlay.classList.toggle('show', isOpen);

    // Update the aria-expanded attribute for accessibility
    hamburger.setAttribute('aria-expanded', isOpen);
});

// Close the menu and overlay when clicking outside the menu or pressing ESC
document.addEventListener('click', function (event) {
    const menu = document.getElementById('menu');
    const bodyContent = document.getElementById('body-content');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('dark-overlay'); // Get overlay element

    if (
        bodyContent.classList.contains('body-pushed') &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        bodyContent.classList.remove('body-pushed');
        hamburger.classList.remove('hamburger-active');
        overlay.classList.remove('show'); // Hide overlay
        hamburger.setAttribute('aria-expanded', false);
    }
});

// Close the menu and overlay when pressing ESC
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const bodyContent = document.getElementById('body-content');
        const hamburger = document.getElementById('hamburger');
        const overlay = document.getElementById('dark-overlay'); // Get overlay element

        bodyContent.classList.remove('body-pushed');
        hamburger.classList.remove('hamburger-active');
        overlay.classList.remove('show'); // Hide overlay
        hamburger.setAttribute('aria-expanded', false);
    }
});

// Hover Banner behavior
document.addEventListener('DOMContentLoaded', function () { 
    const hoverBanner = document.getElementById('global-hover-banner');
    const hoverText = document.getElementById('hover-text');
    const hoverDescription = document.getElementById('hover-description');

    function showHover(caseStudy) {
        // Set the hover text and description
        hoverText.textContent = caseStudy.getAttribute('data-hover') || '';
        hoverDescription.textContent = caseStudy.getAttribute('data-description') || '';

        // Get the button text and create the button if it's present
        const buttonText = caseStudy.getAttribute('data-button');
        let button;

        if (buttonText) {
            // Create the button with the text
            button = document.createElement('button');
            button.textContent = buttonText;
            button.classList.add('hover-button');

            // Add the right arrow icon to the button
            const icon = document.createElement('span');
            icon.classList.add('icon-arrow-right');
            button.appendChild(icon);
        }

        // Clear previous content in the hover banner and append new content
        hoverBanner.innerHTML = '';
        hoverBanner.appendChild(hoverText);
        hoverBanner.appendChild(hoverDescription);

        // Append the button if it was created
        if (button) {
            hoverBanner.appendChild(button);
        }

        // Position the hover banner near the case study
        const rect = caseStudy.getBoundingClientRect();
        hoverBanner.style.opacity = '1';
        hoverBanner.style.left = `${rect.left + window.scrollX + rect.width / 2 - hoverBanner.offsetWidth / 2}px`;
        hoverBanner.style.top = `${rect.top + window.scrollY - hoverBanner.offsetHeight - 20}px`;
    }

    function hideHover() {
        hoverBanner.style.opacity = '0';
    }

    function applyHoverEffect(caseStudy) {
        caseStudy.addEventListener('mouseenter', () => showHover(caseStudy));
        caseStudy.addEventListener('mouseleave', () => {
            // Delay the hiding of the hover banner to ensure it stays visible while hovering over it
            setTimeout(() => {
                if (!hoverBanner.matches(':hover')) {
                    hideHover();
                }
            }, 100);
        });

        // Ensure hoverBanner stays visible when hovering over it
        hoverBanner.addEventListener('mouseenter', () => hoverBanner.style.opacity = '1');
        hoverBanner.addEventListener('mouseleave', hideHover);
    }

    function applyHoverToAll() {
        // Apply hover effect only to case-study elements
        document.querySelectorAll('.case-study').forEach(applyHoverEffect);
    }

    applyHoverToAll();

    // If you are using a carousel or similar feature, re-apply hover effect after changes
    $('.partners').on('init reInit afterChange', applyHoverToAll);
});

// Initialize Slick
$(document).ready(function () {
    $('.partners').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        centerMode: false,
        speed: 500,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                },
            },
        ],
    });
});
