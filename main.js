document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const navbar = document.querySelector('.navbar');
    // In a real scenario, we would add a button element for mobile toggle or use the existing placeholder.
    // For this demo, let's create the button dynamically if it doesn't exist, or just rely on CSS media queries if we had them fully built out.
    // However, I added a placeholder in HTML: <div class="mobile-toggler">☰</div>
    
    const toggleBtn = document.querySelector('.mobile-toggler');
    const navLinks = document.querySelector('.nav-links');

    if (toggleBtn) {
        // We need to ensure the element is visible on mobile via CSS, but let's handle the click
        toggleBtn.addEventListener('click', () => {
            // Simple toggle logic
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(0,0,0,0.95)';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '2rem';
            }
        });
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Simple reveal on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card, .price-card, .review-card, h2').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
