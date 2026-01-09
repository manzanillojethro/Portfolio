// app.js
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Mobile menu toggle
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));

    // Smooth scroll for all nav links
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // navbar offset
                    behavior: 'smooth'
                });
            }
            // Close mobile menu after click
            if (!menu.classList.contains('hidden')) menu.classList.add('hidden');
        });
    });

    // Active link highlighting
    const updateActiveNav = () => {
        let scrollY = window.scrollY + 100; // adjust offset for fixed navbar
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('text-[#DFA381]'));
                const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (activeLink) activeLink.classList.add('text-[#DFA381]');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('load', () => {
        updateActiveNav();

        // Simple fade-in on load for body content
        document.body.style.opacity = 0;
        document.body.style.transition = 'opacity 1s ease';
        requestAnimationFrame(() => {
            document.body.style.opacity = 1;
        });
    });
});
