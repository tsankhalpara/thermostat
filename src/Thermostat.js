function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
};

Thermostat.prototype.up = function () {
  if (this.temperature === 25 && this.powerSaving === true) {
    throw "Power saving on: Too hot!";
  } else if (this.temperature === 32 && this.powerSaving === false) {
    throw "Too hot!"
  } else {
    return this.temperature = this.temperature + 1 ;
  }
};

Thermostat.prototype.down = function () {
  if (this.temperature === 10) {
    throw "Too cold!";
  } else {
    return this.temperature = this.temperature - 1 ;
  }
};

Thermostat.prototype.reset = function () {
  return this.temperature = 20;
};

Thermostat.prototype.usage = function () {
  if (this.temperature < 18) {
    return "low-usage";
  } else if (this.temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
