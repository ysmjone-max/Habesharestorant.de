// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.classList.remove('active'); // Close mobile menu if open

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Animation for elements
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.glass-card, .glass-panel, .section-title').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// Language Toggle
const langToggle = document.getElementById('langToggle');
let currentLang = 'de';

if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    langToggle.textContent = currentLang === 'de' ? '🇬🇧 EN' : '🇩🇪 DE';
    
    document.querySelectorAll('.lang').forEach(el => {
      el.textContent = el.getAttribute(`data-${currentLang}`);
    });
  });
}
