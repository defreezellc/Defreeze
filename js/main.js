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
   ================================================================ */

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

if (hamburger && sidebar) {
  
  // Toggle drawer when hamburger is clicked
  hamburger.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // === UPDATED: Close drawer when clicking the right-side triangle or top header area ===
  sidebar.addEventListener('click', (e) => {
    const rect = sidebar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;   // X position inside sidebar
    const clickY = e.clientY - rect.top;    // Y position inside sidebar

    const sidebarWidth = rect.width;

    // Close if:
    // 1. Click is in the top \~80px (old header area safety net), OR
    // 2. Click is within \~45px of the RIGHT edge (where the new triangle lives)
    const clickedTopHeader = clickY < 80;
    const clickedRightTriangle = clickX > (sidebarWidth - 45);

    if (clickedTopHeader || clickedRightTriangle) {
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

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

console.log('DeFreeze Heating and Cooling website loaded successfully');
