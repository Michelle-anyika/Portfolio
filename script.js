// script.js

// Toggle nav visibility
const toggleNav = document.getElementById('toggleNav');
const navMenu = document.getElementById('navMenu');

// Handle menu toggle
toggleNav.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('active');
});

// Close menu on link click for better UX on mobile
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
    navMenu.classList.remove('active');
  });
});

// Accordion logic: improved true accordion behavior
const allDetails = document.querySelectorAll('details');
allDetails.forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      allDetails.forEach((el) => {
        if (el !== detail) el.removeAttribute('open');
      });
    }
  });
});

// Contact form alert
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}
