const client = new WeatherClient();

class Weather {
  constructor(client) {
    this.client = client;
  }
}

module.exports = Weather;


