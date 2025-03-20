// Get the unordered list where the links will be displayed
const listElement = document.querySelector(".list_of_organizations ul");

// Define the URL for the JSON file
const directoryURL = "https://brendonbainbridge.github.io/wdd230/chamber/data/directory.json";

async function getDirectory() {
  try {
    const response = await fetch(directoryURL);
    const data = await response.json();

    // Shuffle and display the companies
    displayRandomCompanies(data.companies);
  } catch (error) {
    console.error("Error fetching directory data:", error);
  }
}

// Function to randomly shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Function to display three random companies
function displayRandomCompanies(companies) {
  // Shuffle the companies and pick the first 3
  const randomCompanies = shuffleArray(companies).slice(0, 3);

  // Clear the existing list items
  listElement.innerHTML = "";

  // Add the random companies to the list
  randomCompanies.forEach(company => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Organization: <a href="${company.website}">${company.name}</a>`;
    listElement.appendChild(listItem);
  });
}

// Call the function to fetch and display data
getDirectory();
