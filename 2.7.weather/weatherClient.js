const apiKey = require('./apiKey');

class weatherClient {
  constructor() {
  }

fetchWeatherData(city) {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(`Weather data for ${data.name}:`)
      console.log(data);
})};
}; 

module.exports = weatherClient;

// client = new weatherClient;

// console.log(client.fetchWeatherData('Leh'));


    // // .then(weatherData => console.log(`Weather data for %s: %o`, weatherData.name, weatherData));
    // .then(weatherData => console.log(`Weather data for ${weatherData.name}:  `, console.log(weatherData)));