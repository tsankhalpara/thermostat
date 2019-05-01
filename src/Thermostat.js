function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSaving = true;
  this.MINIMUM_TEMP = 10;
  this.powerSaving_MAX_TEMP = 25;
  this.MAX_TEMP = 32;
  this.MED_ENERGY_USAGE_LIMIT = 18;
};

Thermostat.prototype.up = function () {
  if (this.temperature === this.powerSaving_MAX_TEMP &&
    this.powerSaving === true) {
    throw "Power saving on: Too hot!";
  } else if (this.temperature === this.MAX_TEMP && this.powerSaving === false) {
    throw "Too hot!"
  } else {
    return this.temperature = this.temperature + 1 ;
  }
};

Thermostat.prototype.down = function () {
  if (this.temperature === this.MINIMUM_TEMP) {
    throw "Too cold!";
  } else {
    return this.temperature = this.temperature - 1 ;
  }
};

Thermostat.prototype.reset = function () {
  return this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.usage = function () {
  if (this.temperature < this.MED_ENERGY_USAGE_LIMIT) {
    return "low-usage";
  } else if (this.temperature < this.powerSaving_MAX_TEMP) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
