class Thermostat {
  constructor() {
    this.temp = 20
    this.powerSavingMode = false
  }

  getTemperature() {
    return this.temp
  }

  up() {
    if (this.temp < 25 || this.powerSavingMode === false) {
      this.temp++
    }
  }

  down() {
    this.temp--
  }
  
    setPowerSavingMode(mode) {
      this.powerSavingMode = mode
      if (this.temp > 25) {
        this.temp = 25;
      }
    }
  
    reset() {
      this.temp = 20
    }
}

module.exports = Thermostat;