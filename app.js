//const url = 'https://api.openweathermap.org/data/2.5/'
//const key = '89f296a01b80badb8fedf52b3110b5d1'

const url = 'http://api.weatherapi.com/v1/current.json?'
const key = '7675690a33514a018a873649230810'



const setQuery = (e) =>{
    if(e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    //let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    let query = `${url}key=${key}&q=${cityName}&aqi=no`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    console.log(result);

    let city = document.querySelector('.city')
    city.innerText = `${result.location.name}, ${result.location.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.current.feelslike_c)}°C`

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `Rüzgar : ${result.current.wind_kph} km/s`

}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)