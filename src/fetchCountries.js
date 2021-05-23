function fetchCountry(name) {
  return fetch("https://restcountries.eu/rest/v2/").then((response) => {
    return response.json();
  });
}
export default { fetchCountry };
