const visitsDisplay = document.getElementById("visitnum");
let numVisits = Number(window.localStorage.getItem("numOfvisits-ls")) || 0;
const lastVisit = window.localStorage.getItem("lastvisit");
const numdays = lastVisit ? Math.floor((Date.now() - new Date(lastVisit)) / (1000 * 60 * 60 * 24)) : 0;
if (numVisits !== 0 && numdays > 0) {
    visitsDisplay.textContent = `You last visited ${numdays} days ago.`;
} else if (numVisits !== 0) {
    visitsDisplay.textContent = `Back so soon! Awesome!`;
} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}
numVisits++;
localStorage.setItem("numOfvisits-ls", numVisits);
localStorage.setItem("lastvisit", Date.now());

const timerightnow = Date.now();
document.getElementById('timevisitform').value = timerightnow;
