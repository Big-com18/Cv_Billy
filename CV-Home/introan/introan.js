const animationDuration = 6000;
const mainWebsiteURL = '../Home.html';

setTimeout(() => {
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = mainWebsiteURL;
  }, 800);
}, animationDuration);
