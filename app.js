console.log("hi")


var countryInput = document.getElementById('name');

document.getElementsByClassName('country-form')[0].addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(countryInput.value);   
    const updateCountryName = document.getElementById("countryName")

    fetch(`https://restcountries.com/v2/name/${countryInput.value}`)
    .then(response => response.json())
    .then(data => {
        countryName = data[0].name
        updateCountryName.innerHTML = countryName
        console.log(countryName)
    })
 
})



