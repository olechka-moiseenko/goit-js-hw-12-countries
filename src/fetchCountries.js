const refs = {
    countryContainer: document.querySelector(".country__container"),
    input: document.querySelector("#input"),
    inputMessage: document.querySelector(".input-message"),
    inputList: document.querySelector(".input-list"),
};

    function fetchCountries (searchQuery) {
      const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
        return fetch(url).then(
        response => 
            response.json(),
            );
}

const debounce = require('lodash.debounce');
refs.input.addEventListener(
    'input',
    debounce(onSearch, 1000),
  );
 

  function onSearch(e) {
    e.preventDefault()
}