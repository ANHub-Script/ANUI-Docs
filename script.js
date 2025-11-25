// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', () => {
    // Check viewport size
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    // Always create hamburger, CSS will hide it on desktop
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
    `;

    // Insert hamburger after brand
    const navBrand = document.querySelector('.nav-brand');
    navBrand.after(hamburger);

    // Toggle menu
    let menuOpen = false;
    hamburger.addEventListener('click', () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            // Apply flex styles
            navLinks.style.display = 'flex';
            // Disable body scroll when menu is open
            document.body.style.overflow = 'hidden';

            // Animation for hamburger (optional simple rotation)
            hamburger.style.transform = 'rotate(90deg)';
        } else {
            navLinks.style.display = 'none';
            // Re-enable body scroll
            document.body.style.overflow = '';

            hamburger.style.transform = 'rotate(0deg)';
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuOpen = false;
                navLinks.style.display = 'none';
                document.body.style.overflow = '';
                hamburger.style.transform = 'rotate(0deg)';
            }
        });
    });
});