


// function darkmodeswitch(){
//     document.querySelector('body').classList.add('dark');
// }


// button = document.querySelector('.darkmode');
// button.addEventListener('click', darkmodeswitch)


// script.js
// document.getElementById('darkmode').addEventListener('click', function () {
//     document.body.classList.toggle('dark');
// });







// darkmode.js
document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.querySelector('.darkmode');
    darkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        // Toggle dark mode for header and footer
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');

        // Toggle dark mode for other elements
        document.querySelectorAll('.hero_container, .facts_and_history, .rexburg_images, .rexburg_events, .rexburg_questions, .list_of_organizations, .versions-section')
            .forEach(element => element.classList.toggle('dark-mode'));

        // Toggle dark mode for version boxes
        document.querySelectorAll('.version-box').forEach(box => box.classList.toggle('dark-mode'));
    });
});
