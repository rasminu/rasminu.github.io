// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    var navLinks = document.querySelectorAll('nav a');

    // Add a click event listener to each link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the link

            // Get the target section from the link's href attribute
            var targetSectionId = link.getAttribute('href').substring(1);

            // Scroll to the target section smoothly
            document.getElementById(targetSectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// JavaScript function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide the scroll-to-top button based on scroll position
window.onscroll = function () {
    var button = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};