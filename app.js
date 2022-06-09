console.log("hi")


var countryInput = document.getElementById('name');

document.getElementsByClassName('country-form')[0].addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(countryInput.value);   
    const updateCountryName = document.getElementById("countryName")
    const updatePopulation = document.getElementById("population")
    const updateFlag = document.getElementById("countrys_flag")

    fetch(`https://restcountries.com/v2/name/${countryInput.value}`)
    .then(response => response.json())
    .then(data => {
        countryName = data[0].name
        population = data[0].population
        flag = data[0].flag
        updateCountryName.innerHTML = countryName
        updatePopulation.innerHTML = population
        updateFlag.src = flag

        // console.log(countryName)
        console.log(data)
    })
 
})



