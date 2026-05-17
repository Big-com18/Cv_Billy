document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li a");

    // === Toggle menu (Buka Tutup Burger) ===
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");

        const listItems = document.querySelectorAll(".nav-links li");
        listItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 8 + 0.2}s`;
            }
        });
    });

    // === Transisi Smooth Scroll & Auto Close Menu ===
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");

            // Kalau bukan anchor (#), biarkan navigasi normal ke halaman lain
            if (!targetId.startsWith("#")) {
                nav.classList.remove("nav-active");
                burger.classList.remove("toggle");
                const listItems = document.querySelectorAll(".nav-links li");
                listItems.forEach(l => (l.style.animation = ""));
                return; // Biarkan browser navigasi seperti biasa
            }

            e.preventDefault(); // Hanya cegah default kalau anchor

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Tutup menu mobile jika sedang terbuka
                nav.classList.remove("nav-active");
                burger.classList.remove("toggle");
                
                const listItems = document.querySelectorAll(".nav-links li");
                listItems.forEach(l => (l.style.animation = ""));

                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // === Navbar Scrolled Effect ===
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // === Reset menu saat pindah halaman (browser back/forward) ===
    window.addEventListener("pageshow", () => {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
        const listItems = document.querySelectorAll(".nav-links li");
        listItems.forEach(l => (l.style.animation = ""));
    });
});