const apiKey = require('./apiKey');
const strftime = require('strftime');

class WeatherClient {

fetchWeatherData(city) {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  return fetch(apiUrl)
    .then(response => response.json()) 
    .then(weatherData => {
      const sunrise = new Date(weatherData.sys.sunrise * 1000);
      const sunset = new Date(weatherData.sys.sunset * 1000);
      const weather = {
        temp: weatherData.main.temp,
        description: weatherData.weather.map(item => item.main),
        detail: weatherData.weather.map(item => item.description),
        sunrise: strftime('%Y-%m-%d %H:%M:%S', sunrise),
        sunset: strftime('%Y-%m-%d %H:%M:%S', sunset),
        name: weatherData.name,
      };
      return weather;
    });
  };
};

module.exports = WeatherClient;

// client = new weatherClient;

// console.log(client.fetchWeatherData('Leh'));


    // // .then(weatherData => console.log(`Weather data for %s: %o`, weatherData.name, weatherData));
    // .then(weatherData => console.log(`Weather data for ${weatherData.name}:  `, console.log(weatherData)));