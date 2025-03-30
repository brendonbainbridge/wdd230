// darkmode.js
document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.querySelector('.darkmode');
    darkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');

        // Toggle dark mode for other elements
        document.querySelectorAll('.hero_container, .facts_and_history, .rexburg_images, .rexburg_events, .rexburg_questions, .list_of_organizations, .versions-section, .version-box')
            .forEach(element => element.classList.toggle('dark-mode'));
    });
});



