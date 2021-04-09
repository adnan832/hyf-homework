const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// date
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "Today Forecast " + d + "/" + m + "/" + y;
const weather = {};
weather.temperature = {
    unit: "celsius"
}
const KELVIN = 273;
const key = '03cb5d467f485a1ccf2fca9e32555f53';
//getting geolocation 

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}
function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}
//fetching data based on current location

function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            console.log(data);
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.windspeed = data.wind.speed;
            weather.sunrise = data.sys.sunrise;
            weather.sunset = data.sys.sunset;
            displayWeather();
        })
}
function displayWeather() {
    iconElement.innerHTML = `<img src= http://openweathermap.org/img/wn/${weather.iconId}@2x.png>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    locationElement.innerHTML = `${weather.city} - ${weather.country}`;
    // calculating sunset and sunrise time
    let time1 = new Date(weather.sunrise * 1000);
    let sr = (time1.getHours() + ":" + (((0).toString() + time1.getMinutes()).substr(-2)) + ":" + (((0).toString() + time1.getSeconds()).substr(-2)));
    let time2 = new Date(weather.sunset * 1000);
    let ss = (time2.getHours() + ":" + (((0).toString() + time2.getMinutes()).substr(-2)) + ":" + (((0).toString() + time2.getSeconds()).substr(-2)));
    descElement.innerHTML = weather.description + "<br>" + " wind speed: " + weather.windspeed + " m/s" + "<br>" + "Sunset: " + sr + "<br>" + "Sunrise: " + ss;
}
// temperature conversion

function celsiusToFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32;
}
tempElement.addEventListener("click", function () {
    if (weather.temperature.value === undefined) return;
    if (weather.temperature.unit == "celsius") {
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    } else {
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});