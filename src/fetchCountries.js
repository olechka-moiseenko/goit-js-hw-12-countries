function fetchCountry() {
  return fetch("https://restcountries.eu/rest/v2/name/eesti").then(
    (response) => {
      return response.json();
    }
  );
}
export default { fetchCountry };
