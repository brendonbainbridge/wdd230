const visitsDisplay = document.querySelector(".visitnum");
let numVisits = Number(window.localStorage.getItem("numOfvisits-ls")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `First time visiting my website! Thanks! :3`;
}
numVisits++;
localStorage.setItem("numOfvisits-ls", numVisits);





