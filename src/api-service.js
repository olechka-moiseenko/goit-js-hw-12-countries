import "./sass/style.scss";
import countriesCardTpl from "..templates/countries.hbs";

const refs = {
  countryContainer: document.querySelector(".container"),
  searchForm: document.querySelector(".search-input"),
};
refs.searchForm.addEventListener("input", debounce(onSearch, 500));

function onSearch(e) {
  e.preventdefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  fetchCountry(searchQuery)
    .then(rendercountriesCard)
    .catch((error) => console.log(error))
    .finally(() => form.reset());
}

// function fetchCountry() {
//   return fetch("https://restcountries.eu/rest/v2/name/eesti").then(
//     (response) => {
//       return response.json();
//     }
//   );
// }

function rendercountriesCard(country) {
  const markup = countriesCardTpl(country);
  refs.countryContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert("По вашему запросу ничего не найдено");
}
