const Thermostat = require('./thermostat');

describe("thermostat", () => {
  let stat;

  beforeEach(() => {
    stat = new Thermostat();
  });

  test("that the starting temp of the stat is 20 degrees", () => {
    expect(stat.getTemperature()).toBe(20);
  });

  test("that the stat reads 22 degrees after going up twice", () => {
    stat.up();
    stat.up();
    expect(stat.getTemperature()).toBe(22);
  });
  
  test("that the stat reads 21 degrees after going up twice and down once", () => {
    stat.up();
    stat.up();
    expect(stat.getTemperature()).toBe(22);
    stat.down();
    expect(stat.getTemperature()).toBe(21);
  });
  
    test("that power saving mode sets the max temp to 25 degrees", () => {
      stat.setPowerSavingMode(true);
      expect(stat.getTemperature()).toBe(20);
      for (let i = 0 ; i < 10 ; i++) {
        stat.up();
      }
      expect(stat.getTemperature()).toBe(25);
    });
    
    test("that power saving mode reduces a higher temp back to 25 degrees", () => {
      expect(stat.getTemperature()).toBe(20);
      for (let i = 0 ; i < 10 ; i++) {
        stat.up();
      }
      expect(stat.getTemperature()).toBe(30);
      stat.setPowerSavingMode(true);
      expect(stat.getTemperature()).toBe(25);
    });
    
      test("that power saving mode OFF allows temp to 26 degrees", () => {
        stat.setPowerSavingMode(true);
        expect(stat.getTemperature()).toBe(20);
        for (let i = 0 ; i < 10 ; i++) {
          stat.up();
        }
        expect(stat.getTemperature()).toBe(25);
        stat.setPowerSavingMode(false);
        stat.up();
        expect(stat.getTemperature()).toBe(26);
      });
    
      test("that reset sets temp to 20 degrees", () => {
        expect(stat.getTemperature()).toBe(20);
        for (let i = 0 ; i < 10 ; i++) {
          stat.up();
        }
        expect(stat.getTemperature()).toBe(30);
        stat.reset();
        expect(stat.getTemperature()).toBe(20);
      });
  });

  test("class Thermostat returns thermostaterature as 20", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });