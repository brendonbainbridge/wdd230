// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent += ` ${currentYear}`;

// Get the last modified date
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('lastModified').textContent += ` ${lastModified.toLocaleDateString(undefined, options)}`;
