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

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    try {
      const response = await fetch('https://portfolio-backend-mu-self.vercel.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      alert(result.message);
      if (result.success) contactForm.reset();
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  });
}
