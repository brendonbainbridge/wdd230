const temp = 30;
const wind = 30;

function findwinchill(temp, wind) {

  if (temp <= 50 && wind > 3) {
    const windtemp = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp) * Math.pow(wind, 0.16);
    return windtemp;
  }

  else {
    const windtemp = "N/A";
    return windtemp;
  }
}

const winchill = findwinchill(temp, wind);
document.getElementById("findwinchill").innerHTML = winchill;