function fetchCountry(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(
    (response) => {
      console.log(response.json());
      return response.json();
    }
  );
}

export default { fetchCountry };
