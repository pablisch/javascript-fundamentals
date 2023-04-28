const WeatherClient = require('./weatherClient')

class Weather {
  constructor(client) {
    this.client = client;
    this.array = []
  }

  async load2(city) {
    const data = await this.client.fetchWeatherData(city)
    this.array.push(data);
    return data;
  }

  load(city) {
    return this.client.fetchWeatherData(city)
    .then((data) => this.array.push(data)
      // return data
    );
  }

  getWeatherData() {
    // console.log(`Weather data for ${this.array[0].name}`);
    // console.log(`Temperature: ${this.array[0].temp}`);
    // console.log(`Outlook: ${this.array[0].description}`);
    // console.log(`Detail: ${this.array[0].detail}`);
    // console.log(`Sunrise: ${this.array[0].sunrise}`);
    // console.log(`Sunset: ${this.array[0].sunset}`);
    return this.array
  }
}

// 👇🏻 to create objects before running function in terminal
// const client = new WeatherClient()
// const weather = new Weather(client)

// 👇🏻 to run the functions in terminal
// weather.load2('Bristol')
// .then(() => {
//   console.log(weather.getWeatherData())
// });

module.exports = Weather;


