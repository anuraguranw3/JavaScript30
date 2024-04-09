const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network Response Error");
        }
        return response.json();
    })
    .then(data => cities.push(...data))
    .catch(error => console.log("error fetching data:", error));

function findMatches(word, cities) {
    return cities.filter(place => {
        const regex = new RegExp(word, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        return `
        <li>
            <span class="name">${place.city}, ${place.state}</span>
            <span class="population">${place.population}</span>
        </li>
        `
    }).join("");
    suggestions.innerHTML = html;
}

search.addEventListener("input", displayMatches);