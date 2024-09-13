// Feature 1: Current date and time
let currentTimePeriod = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
let currentDay = days[currentTimePeriod.getDay()];

let currentHour = currentTimePeriod.getHours;
let currentMinutes = currentTimePeriod.getMinutes;

if (currentTimePeriod.getHours() < 10) {
    currentHour = `0${currentTimePeriod.getHours()}`;
} else {
    currentHour = currentTimePeriod.getHours();
}

if (currentTimePeriod.getMinutes() < 10) {
    currentMinutes = `0${currentTimePeriod.getMinutes()}`;
} else {
    currentMinutes = currentTimePeriod.getMinutes();
}

let dayTimeHeading = document.querySelector("#day-time");
dayTimeHeading.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;


// Feature 2: Search engine

function displayWeather(response) {
    let cityHeader = document.querySelector("#city");
    let currentTempElement = document.querySelector("#current-temp");

    let currentCity = response.data.city;
    let currentTemperature = Math.round(response.data.temperature.current);

    cityHeader.innerHTML = currentCity;
    currentTempElement.innerHTML = currentTemperature;
}

function getInfo(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let city = searchInput.value;

    let apiKey = "5c8o643ae4ebb3ft8e1b94e99eafcfb0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", getInfo);