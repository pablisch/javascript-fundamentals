const apiKey = require('./apiKey');
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
const strftime = require('strftime');

fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    const sunrise = new Date(weatherData.sys.sunrise * 1000);
    const sunset = new Date(weatherData.sys.sunset * 1000);
    console.log({
      temp: weatherData.main.temp,
      description: weatherData.weather.map(item => item.main),
      detail: weatherData.weather.map(item => item.description),
      sunrise: strftime('%Y-%m-%d %H:%M:%S', sunrise),
      sunset: strftime('%Y-%m-%d %H:%M:%S', sunset),
      name: weatherData.name,
    } )
  });

  console.log('Requesting weather data');
