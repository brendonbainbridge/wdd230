const baseURL = "https://brendonbainbridge.github.io/wdd230/";
const linksURL = "";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

getLinks();

function displayLinks(lessons) {
  const container = document.querySelector(".listlinks");
  container.innerHTML = ''; // Clear existing content

  lessons.forEach(lesson => {
    const listItem = document.createElement('li');

    lesson.links.forEach((link, index) => {
      const anchor = document.createElement('a');
      anchor.href = link.url; // Use the URL directly from the JSON data
      anchor.textContent = link.title;
      listItem.appendChild(anchor);

      if (index < lesson.links.length - 1) {
        listItem.appendChild(document.createTextNode(" | "));
      }
    });

    container.appendChild(listItem);
  });
}






const url = 'https://brendonbainbridge.github.io/wdd230/data/links.json';
const cards = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayCompanies(data.companies); // note that we reference the prophets array of the JSON data object, not just the object
}

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membership_level = document.createElement('p');
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        website.textContent = `${company.website}`;
        membership_level.textContent = `${company.membership_level}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', company.imageurl);
        portrait.setAttribute('alt', `Portrait of ${company.name}`);
        portrait.setAttribute('loading', 'lazy');

        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);
        card.appendChild(membership_level);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

