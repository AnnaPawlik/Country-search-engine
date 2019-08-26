'use strict'

const url = 'https://restcountries.eu/rest/v1/name/';
const countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    let countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList)
        .catch(function(error) {
            console.log(error);
        });
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
        const liEl = document.createElement('li');
        liEl.innerText = [item.name, item.nativeName, item.capital];
        countriesList.appendChild(liEl);
    });
}

