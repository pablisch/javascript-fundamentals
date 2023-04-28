const Weather = require('./weather');
const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

describe("weather", () => {
  it("loads data for bristol and returns the data", () => {
      const mockClient = {
        fetchWeatherData: jest.fn(),
      };
    
      mockClient.fetchWeatherData.mockResolvedValueOnce({
        name: 'Bristol',
        temp: 2.6,
        description: [ 'Clouds' ],
        detail: [ 'overcast clouds' ],
        sunrise: '2023-04-28 01:03:58',
        sunset: '2023-04-28 14:30:15'
      });

      const weather = new Weather(mockClient);

      weather.load('Bristol')
      .then(() => {
        expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('Bristol');
        const fullData = weather.getWeatherData();
        expect(fullData[0].temp).toBe(2.6);
        // done();
      });
  });
});