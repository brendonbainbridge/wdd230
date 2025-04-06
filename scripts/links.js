// The JSON file link
const linksURL = "https://brendonbainbridge.github.io/wdd230/data/rentals.json";

// Fetching the rentals data
async function getRentals() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayTable(data.rentals);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to display the table dynamically
function displayTable(rentals) {
    // Get the container div
    const container = document.querySelector(".listlinks");
    container.innerHTML = '';

    // Create the table elements
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create the header row
    const headerRow = document.createElement('tr');
    const headers = [
        'Vehicle',
        'Max Persons',
        'Reservation (Half/Full Day)',
        'Walk-in (Half/Full Day)'
    ];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create rows for rentals data
    rentals.forEach(rental => {
        const row = document.createElement('tr');

        // Vehicle name
        const vehicleCell = document.createElement('td');
        vehicleCell.textContent = rental.vehicle;
        row.appendChild(vehicleCell);

        // Max persons
        const maxPersonsCell = document.createElement('td');
        maxPersonsCell.textContent = rental.maxPersons;
        row.appendChild(maxPersonsCell);

        // Reservation prices
        const reservationCell = document.createElement('td');
        reservationCell.textContent = `$${rental.reservation.halfDay} / $${rental.reservation.fullDay}`;
        row.appendChild(reservationCell);

        // Walk-in prices
        const walkInCell = document.createElement('td');
        walkInCell.textContent = `$${rental.walkIn.halfDay} / $${rental.walkIn.fullDay}`;
        row.appendChild(walkInCell);

        // Append the row to tbody
        tbody.appendChild(row);
    });

    // Add tbody and append to container
    table.appendChild(tbody);
    container.appendChild(table);
}

// Fetch the data and display the table
getRentals();
