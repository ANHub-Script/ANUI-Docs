// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80; // Navbar height
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active link
                    updateActiveNavLink(href);
                }
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        if (currentSection) {
            updateActiveNavLink(currentSection);
        }
    });
    
    function updateActiveNavLink(href) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === href) {
                link.classList.add('active');
            }
        });
    }
});

// ===== CODE COPY FUNCTIONALITY =====
function copyCode(button, codeId) {
    const codeElement = document.getElementById(codeId);
    const code = codeElement.textContent;
    
    // Copy to clipboard
    navigator.clipboard.writeText(code).then(() => {
        // Update button state
        const originalText = button.innerHTML;
        button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            Copied!
        `;
        button.classList.add('copied');
        
        // Reset after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            const originalText = button.innerHTML;
            button.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
                Copied!
            `;
            button.classList.add('copied');
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Fallback copy failed:', err);
        }
        document.body.removeChild(textArea);
    });
}

// ===== TAB SWITCHING =====
function switchTab(tabName) {
    // Hide all tab panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Deactivate all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab panel
    const selectedPanel = document.getElementById('tab-' + tabName);
    if (selectedPanel) {
        selectedPanel.classList.add('active');
    }
    
    // Activate clicked button
    event.target.classList.add('active');
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(`
        .feature-card,
        .component-card,
        .installation-card,
        .info-box
    `);
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 0, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', () => {
    // Create mobile menu button if viewport is small
    if (window.innerWidth <= 768) {
        const navContainer = document.querySelector('.nav-container');
        const navLinks = document.querySelector('.nav-links');
        
        // Create hamburger button
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
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(10, 10, 10, 0.98)';
                navLinks.style.padding = '1rem';
                navLinks.style.borderTop = '1px solid #222';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    // ESC key to close any open modals or menus
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        }
    }
});

// ===== PERFORMANCE: Lazy load images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== EASTER EGG: Konami Code =====
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        // Trigger special effect
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// ===== ANALYTICS (placeholder for future use) =====
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
    // In production, you would send this to your analytics service
    // Example: gtag('event', eventName, eventData);
}

// Track button clicks
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn, .tab-button').forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('button_click', {
                button_text: button.textContent.trim(),
                button_class: button.className
            });
        });
    });
    
    // Track code copies
    const originalCopyCode = window.copyCode;
    window.copyCode = function(button, codeId) {
        trackEvent('code_copied', {
            code_id: codeId
        });
        originalCopyCode(button, codeId);
    };
});

// ===== THEME TOGGLE (optional feature) =====
function initThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initThemeToggle);

// ===== SEARCH FUNCTIONALITY (for future enhancement) =====
function initSearch() {
    // Placeholder for search functionality
    // This could be enhanced to search through component names and descriptions
}

// ===== PRINT STYLES =====
window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections for printing
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.style.display = 'block';
    });
});

window.addEventListener('afterprint', () => {
    // Restore original state
    switchTab('basic');
});
