const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

// Toggle navbar saat burger diklik
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    // Animasi tiap link
    navItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Animasi burger icon
    burger.classList.toggle('toggle');
});

// Tutup nav saat link diklik (untuk mobile)
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navItems.forEach(link => (link.style.animation = ''));
    }
});

// === Highlight link aktif saat scroll ===
const sections = document.querySelectorAll('section');
const navLinksAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 100; // tambahkan offset sedikit agar lebih akurat

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinksAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
