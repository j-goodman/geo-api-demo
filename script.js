var myHeaders = new Headers();
myHeaders.append("apikey", "o4Zfe6TzMtsESTXClp6TgLmHtq3au8Iw");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const getCountryByName = (countryName) => {
    fetch(`https://api.apilayer.com/geo/country/name/${countryName}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        let country = JSON.parse(result)[0]
        let text = `${country.name} is a country in ${country.region}. It has a population of ${country.population} and its capital city is ${country.capital}.`
        infoContainer.innerText = text
      })
      .catch(error => console.log('error', error));
}

const wordInput = document.getElementById("word-input")
const infoContainer = document.getElementById("info-container")

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getCountryByName(wordInput.value)
    }
})
