document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    // Toggle Navbar for mobile
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Close navbar when a link is clicked (for mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    // Highlight active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust offset for fixed header
            if (pageYOffset >= sectionTop - 80) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});