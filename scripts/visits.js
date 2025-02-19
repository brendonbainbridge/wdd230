const visitsDisplay = document.querySelector(".visitnum");
let numVisits = Number(window.localStorage.getItem("numOfvisits-ls")) || 0;
if (numOfvisits !== 0) {
	visitsDisplay.textContent = numOfvisits;
} else {
	visitsDisplay.textContent = `First time visiting my website! Thanks! :3`;
}
numOfvisits++;
localStorage.setItem("numOfvisits-ls", numOfvisits);