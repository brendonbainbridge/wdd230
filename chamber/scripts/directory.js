const url = 'https://brendonbainbridge.github.io/wdd230/data/links.json';
const cards = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membership_level = document.createElement('p');
        let portrait = document.createElement('img');

        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        website.textContent = `${company.website}`;
        membership_level.textContent = `${company.membership_level}`;

        portrait.setAttribute('src', company.image); // Updated this line
        portrait.setAttribute('alt', `Portrait of ${company.name}`);
        portrait.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(portrait); // Corrected this line previously
        card.appendChild(membership_level);

        cards.appendChild(card);
    });
}
