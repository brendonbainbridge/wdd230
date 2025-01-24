// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent += ` ${currentYear}`;

// // Get the last modified date
// const lastModified = new Date(document.lastModified);
// const options = { year: 'numeric', month: 'long', day: 'numeric' };
// document.getElementById('lastModified').textContent += ` ${lastModified.toLocaleDateString(undefined, options)}`;

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navList = document.querySelector(".navlist");

    hamburgerMenu.addEventListener("click", () => {
        navList.classList.toggle("show");
        // Toggle the hamburger icon between ≡ and X
        if (navList.classList.contains("show")) {
            hamburgerMenu.textContent = "✕";
        } else {
            hamburgerMenu.textContent = "≡";
        }
    });
});
