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

function getForecast(city) {
  console.log(city);
  let apiKey = "90d72f4d79ee675be564dad22ec4ce52";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${apiKey}&units=metric`;
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
  humidityElement.innerHTML = response.data.main.humidity;
  let windspeedElement = document.querySelector("#wind1");
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);
  getForecast(response.data.name);
}
function search(city) {
  let apiKey = "90d72f4d79ee675be564dad22ec4ce52";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function citySubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#query");
  console.log(cityInputElement.value);
  search(cityInputElement.value);
}
search("Tehran");
let form = document.querySelector("#search-form");
form.addEventListener("submit", citySubmit);
