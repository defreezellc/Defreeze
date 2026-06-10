/* ================================================================
   DEFREEZE HEATING & COOLING - MAIN JAVASCRIPT
   
   Features:
   - Smooth scroll navigation to page sections
   - Mobile hamburger menu toggle
   - Sidebar drawer open/close functionality
   - Click-outside detection to close drawer
   - Close arrow in sidebar header
   ================================================================ */

/* ================================================================
   SMOOTH SCROLL NAVIGATION
   Enables smooth scrolling to anchor sections (e.g., #home, #services)
   ================================================================ */

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

/* ================================================================
   MOBILE HAMBURGER MENU & SIDEBAR DRAWER
   
   Functionality:
   - Click hamburger to toggle sidebar visibility
   - Click close arrow in header to close drawer
   - Click nav links to close drawer
   - Click outside drawer to close it
   - Hamburger icon transforms to X when open
   ================================================================ */

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

// Only run if both elements exist
if (hamburger && sidebar) {
  
  // Toggle drawer open/close when hamburger is clicked
  hamburger.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close drawer when sidebar header (close arrow) is clicked
  sidebar.addEventListener('click', (e) => {
    // Check if click is within the top 70px (header area) and left side
    if (e.pageY < 70 && e.pageX - sidebar.offsetLeft < 280) {
      sidebar.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close drawer when any nav link is clicked
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close drawer when user clicks outside of it
  document.addEventListener('click', (e) => {
    // Check if click is outside both sidebar and hamburger
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Log that page has loaded successfully
console.log('DeFreeze Heating and Cooling website loaded successfully');
