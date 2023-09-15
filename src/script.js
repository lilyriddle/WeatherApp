let dateElement = document.querySelector("#date");
let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let date = today.getUTCDate();
let month = today.getMonth();
months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let year = today.getFullYear();
let day = today.getDay();
days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayElement = document.querySelector("#day");
dayElement.innerHTML = `${days[day]}`;
dateElement.innerHTML = `${date} ${months[month]} ${year}`;

if (hours < 10) {
  hours = `,0${hours}`;
}
if (minutes < 1) {
  minutes = `0${minutes}`;
}
let timeElement = document.querySelector("#time");
timeElement.innerHTML = `,${hours}:${minutes}`;
//**search city* */
//function search(event) {
//event.preventDefault();
//let cityElement = document.querySelector("#city");
//let city = document.querySelector("#query");
//cityElement.innerHTML = city.value;
//}
//let searchform = document.querySelector("#search-form");
//searchform.addEventListener("submit", search);

//weather api
//let apiKey = "90d72f4d79ee675be564dad22ec4ce52";
//let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&";

//function showtemperature(response) {
//let temperature = Math.round(response.data.main.temp);
//document.querySelector("#weather1").innerHTML = temperature + "°C";
//document.querySelector("#city").innerHTML = response.data.name;
//showtemperature(response.data.name);
//}
//function search(city) {
//let apiKey = "90d72f4d79ee675be564dad22ec4ce52";
//let apiUrl = `${apiUrl}q=${city}&${apiKey}&units=metric`;
//axios.get(`${apiUrl}q=${city}&${apiKey}&units=metric`).then(showtemperature);
//}
//function submit(event) {
//event.preventDefault();
//let cityElement = document.querySelector("#query");
//search(cityElement.value);
//}
//let searchbox = document.querySelector("#search-form");
///searchbox.addEventListener("submit", search);
//axios
//.get(`${apiUrl}q=${cityname}&${apiKey}&units=metric`)
//.then(function showtemperature(response) {
//let temperature = Math.round(response.data.main.temp);
//document.querySelector("#weather1").innerHTML = temperature + "°C";
//document.querySelector("#city").innerHTML = response.data.name;
//});

//function showtemperature(response) {
//*current temperature*
/// let temperature = Math.round(response.data.main.temp);
// document.querySelector("#weather1").innerHTML = temperature + "°C";
//  document.querySelector("#city").innerHTML = response.data.name;
//event.preventDefault();
//console.log(temperature);
//console.log(response);
//showtemperature(searchbox.value);

//let city = document.querySelector("#city");
//city.innerHTML = main.name;
//let currenttemp = document.querySelector("#weather1");
//currenttemp.innerHTML = `${temperature}°C`;
// }
//searchbutton.addEventListener("click", () => {
// showtemperature(searchbox.value);
//});
//axios
/// .get(`${apiUrl}&q=${city}&${apiKey}&units=metric`)
// .then(showtemperature);
//`&q=${city}&`
//"q=Tokyo"
//q=Sydney&appid=90d72f4d79ee675be564dad22ec4ce52&units=metric

function displayForecast(response) {
  console.log(response.data.daily);
  let forecastElement = document.querySelector("#forecast1");

  forecastElement.innerHTML = `<span class="dayname">Sat</span>
            <img src="src/sat.png" />
            <span class="temperature">7°C</span>`;
}

function getForecast(coord) {
  let apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}&units=metric`;

  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#weather11");
  celsiusTemperature = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let weatherdescription = document.querySelector("#description");
  weatherdescription.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity1");

  let weathericon = document.querySelector(".weathericon");
  if (response.data.weather[0].main == "Clouds") {
    weathericon.src = "src/tue.png";
  } else if (response.data.weather[0].main == "Clear") {
    weathericon.src = "src/sun.png";
  } else if (response.data.weather[0].main == "Rain") {
    weathericon.src = "src/mon.png";
  } else if (response.data.weather[0].main == "Drizzle") {
    weathericon.src = "src/drizzle.png";
  } else if (response.data.weather[0].main == "Mist") {
    weathericon.src = "src/mist.png";
  } else if (response.data.weather[0].main == "Snow") {
    weathericon.src = "src/sat.png";
  }

  celsius = response.data.main.temp;
  humidityElement.innerHTML = response.data.main.humidity;
  let windspeedElement = document.querySelector("#wind1");
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);
  getForecast(response.data.coord);
}
function search(city) {
  let apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function citySubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#query");
  console.log(cityInputElement.value);
  search(cityInputElement.value);
}

function showfahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitconvertor = (celsius * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#weather11");
  temperatureElement.innerHTML = Math.round(fahrenheitconvertor);
  celsiuslink.classList.remove("active");
  fahrenheit.classList.add("active");
}

function showcelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#weather11");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  celsiuslink.classList.add("active");
  fahrenheit.classList.remove("active");
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", citySubmit);
let celsius = null;

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", showfahrenheitTemp);

let celsiuslink = document.querySelector("#celsiuslink");
celsiuslink.addEventListener("click", showcelsiusTemp);

search("Tehran");
