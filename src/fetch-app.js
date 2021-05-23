import "./sass/style.scss";
import countriesCardTpl from "../templates/countries.hbs";
import API from "./fetchCountries.js";
import getRefs from "./get-refs";
import debounce from "lodash.debounce";

const refs = getRefs();

refs.searchForm.addEventListener("input", debounce(onSearch, 500));

function onSearch(e) {
  e.preventdefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchCountry(searchQuery)
    .then(rendercountriesCard)
    .catch((error) => console.log(error))
    .finally(() => form.reset());
}

function renderCountriesCard(country) {
  const markup = countriesCardTpl(country);
  refs.countryContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert("По вашему запросу ничего не найдено");
}
