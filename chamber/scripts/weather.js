// select HTML elements in the document
const forecastContainer = document.querySelector('#forecast-container'); // Add a container for the 3-day forecast

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.82&lon=-111.79&units=imperial&appid=bba238fbcc9c2b3318585e02f2077c23';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    // Clear previous results
    forecastContainer.innerHTML = '';

    // OpenWeatherMap forecast API returns data in 3-hour intervals, so we pick one forecast per day
    for (let i = 0; i < 3; i++) {
        const dayData = data.list[i * 8]; // Select data approximately 24 hours apart (8 intervals of 3 hours)

        const temp = `${dayData.main.temp}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/w/${dayData.weather[0].icon}.png`;
        const desc = dayData.weather[0].description;

        // Create and append elements for each day
        const dayElement = document.createElement('div');
        dayElement.classList.add('forecast-day');

        dayElement.innerHTML = `
            <p><strong>Day ${i + 1}</strong></p>
            <img src="${iconsrc}" alt="${desc}">
            <p>${temp}</p>
            <p>${desc}</p>
        `;

        forecastContainer.appendChild(dayElement);
    }
}
