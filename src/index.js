import "./sass/style.scss";
import { fetchCountries } from "./fetchCountries.js";
import debounce from 'lodash.debounce';
import countriesCardTpl from "./templates/one-country.hbs";
import countriesList from "./templates/list-countries.hbs";
import { tooManyItems, noItemsQualified, closeAllMessages } from './pnotify.js';

const refs = {
  input: document.querySelector("#country-name"),
  result: document.querySelector("#result"),
}

refs.input.addEventListener("input", debounce(onInputSearch, 500));

function onInputSearch () {
  refs.result.innerHTML = '';
  closeAllMessages();
  const name = refs.input.value;
  fetchCountries(name) 
   .then(show)
   .catch((error) => noItemsQualified());
}


function show(countries) {
 if (countries.length === 1) {
    refs.result.innerHTML = countriesCardTpl(countries[0]);
  }
  else if(countries.length < 10)
  {
    refs.result.innerHTML = countriesList(countries);
  }
  else
  {
    tooManyItems();
  }
}
