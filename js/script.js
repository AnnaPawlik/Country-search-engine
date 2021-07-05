'use strict'

const url = 'https://restcountries.eu/rest/v1/name/';
const countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    let countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then((resp) => resp.json())
        .then(showCountriesList)
        .catch((error) => console.log(error));
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(({name, nativeName, capital}) => {
        const liEl = document.createElement('li');
        liEl.innerText = `${name}, ${nativeName}, ${capital}`;
        countriesList.appendChild(liEl);
    });
}

