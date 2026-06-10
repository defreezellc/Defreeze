// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Log when page loads
console.log('DeFreeze Heating and Cooling website loaded');
// ===== Mobile Hamburger Menu =====
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

if (hamburger && sidebar) {
  hamburger.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close drawer when a nav link is clicked
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Optional: close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}
