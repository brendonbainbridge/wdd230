const baseURL = "https://brendonbainbridge.github.io/wdd230/";
const linksURL = "https://brendonbainbridge.github.io/wdd230/data/links.json";

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