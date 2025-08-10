const introDuration = 3500; // Slightly shorter duration
const mainWebsiteURL = "../Home.html";

function redirectToMainWebsite() {
    const introContainer = document.querySelector('.intro-container');
    introContainer.style.animation = 'fadeOut 0.5s forwards'; // Add fade out animation
    setTimeout(() => {
        window.location.href = mainWebsiteURL;
    }, introDuration);
}

window.onload = redirectToMainWebsite;

// Optional: Add fade out animation keyframes in CSS
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `@keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }`;
document.head.appendChild(styleSheet);