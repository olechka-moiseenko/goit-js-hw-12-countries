import fetchCountries from "./fetchCountries";
import "./sass/style.scss";
// import "./fetchCountries.js";
//import "./fetch-app.js";

// Test one country

// import countriesCardTpl from "./templates/one-country.hbs";
// function renderCountriesCard(country) {}
// const resultEl = document.querySelector("#result");
// resultEl.innerHTML = countriesCardTpl({
//   name: "name",
//   capital: "capital",
//   population: "population",
//   Languages: ["en", "fr"],
//   flagUrl: "https://restcountries.eu/data/che.svg",
// });

import tmpl from "./templates/list-countries.hbs";
const resultEl = document.querySelector("#result");
resultEl.innerHTML = tmpl({
  countries: [{ name: "Mango" }, { name: "pineapple" }],
});

function fetchCountry(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(
    (response) => {
      return response.json();
    }
  );
}
fetchCountry("Uk");
