const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Toggle the visibility of the navbar when hovering the hamburger menu
hamburgerMenu.addEventListener('mouseenter', () => {
    navLinks.style.display = 'flex';
});

hamburgerMenu.addEventListener('mouseleave', () => {
    navLinks.style.display = 'none';
});
