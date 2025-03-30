// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent += ` ${currentYear}`;

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger_menu");
    const navList = document.querySelector(".nav_list");

    if (hamburgerMenu && navList) {
        hamburgerMenu.addEventListener("click", () => {
            navList.classList.toggle("show");
            // Toggle the hamburger icon between ≡ and X
            hamburgerMenu.textContent = navList.classList.contains("show") ? "✕" : "≡";
        });
    } else {
    }
});



