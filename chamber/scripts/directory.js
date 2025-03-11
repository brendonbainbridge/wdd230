const url = 'https://brendonbainbridge.github.io/wdd230/chamber/data/directory.json';
const cards = document.querySelector('#cards');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

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
        website.textContent = `${company.name} Website`;
        website.setAttribute('href', company.website);
        website.setAttribute('target', '_blank');

        membership_level.textContent = `Membership Level: ${company.membership_level}`;

        portrait.setAttribute('src', company.image);
        portrait.setAttribute('alt', `Portrait of ${company.name}`);
        portrait.setAttribute('loading', 'lazy');

        card.classList.add('company-card');
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(portrait);
        card.appendChild(membership_level);

        cards.appendChild(card);
    });
};

gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener("click", showList); // example using defined function

function showList() {
    cards.classList.add("list");
    cards.classList.remove("grid");
}
