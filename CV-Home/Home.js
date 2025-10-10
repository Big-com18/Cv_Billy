document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // === Toggle menu ===
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");

    // Animasi tiap link
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards ${index / 8 + 0.2}s`;
      }
    });
  });

  // === Tutup menu saat klik link ===
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
      navLinks.forEach(l => (l.style.animation = ""));
    });
  });

  // === Reset menu saat pindah halaman ===
  window.addEventListener("pageshow", () => {
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
    navLinks.forEach(l => (l.style.animation = ""));
  });
});
