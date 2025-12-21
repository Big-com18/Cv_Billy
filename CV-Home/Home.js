document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li a"); // Target anchor tags directly

    // === Toggle menu (Buka Tutup Burger) ===
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");

        // Animasi tiap link di dalam menu
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
            e.preventDefault(); // Mencegah lompatan kasar default browser

            // 1. Ambil target section (misal: #pendidikan)
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // 2. Tutup menu mobile jika sedang terbuka
                nav.classList.remove("nav-active");
                burger.classList.remove("toggle");
                
                // Reset animasi link
                const listItems = document.querySelectorAll(".nav-links li");
                listItems.forEach(l => (l.style.animation = ""));

                // 3. Kalkulasi posisi scroll (dikurangi tinggi navbar agar tidak ketutup)
                const headerOffset = 80; // Sesuaikan dengan tinggi navbar Anda
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // 4. Lakukan Scroll Halus (Smooth Scroll)
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // === Reset menu saat pindah halaman (browser back/forward) ===
    window.addEventListener("pageshow", () => {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
        const listItems = document.querySelectorAll(".nav-links li");
        listItems.forEach(l => (l.style.animation = ""));
    });
});