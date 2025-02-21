const temp = 60;
const wind = 10;

function findwinchill(temperature, windSpeed) {

  if (temp <= 50 && wind > 3) {
    const windtemp = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(temp, 0.16)) + Math.pow((0.4275 * temp * wind), 0.16);
    return windtemp;
  }

  else {
    const windtemp = "N/A";
    return windtemp;
  }
}

