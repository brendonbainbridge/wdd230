const visitsDisplay = document.querySelector(".visitnum");
let numVisits = Number(window.localStorage.getItem("numOfvisits-ls")) || 0;
if (numVisits !== 0 && ) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}
numVisits++;
localStorage.setItem("numOfvisits-ls", numVisits);





If this is the user's first visit, display "Welcome! Let us know if you have any questions.".
If the amount of time between visits is less than a day, display "Back so soon! Awesome!".
    Otherwise, display the number of days in a message like this: "You last visited n days ago.",
     where n is the actual, whole number of days between visits.If the number of days is 1, then change the language to "day" not "days".