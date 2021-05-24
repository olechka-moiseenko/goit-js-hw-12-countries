const BASE_URL = 'https://restcountries.eu/rest/v2';

export function fetchCountries(name) {
  const url = `${BASE_URL}/name/${name}`;
   return fetch(url)
     .then(response => {
       if(response.ok) {
       return (response.json());
       }
    throw new Error (response.statusText)
  })
}  


