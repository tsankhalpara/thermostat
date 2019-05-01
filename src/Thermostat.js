function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
};

Thermostat.prototype.up = function () {
  if (this.temperature === 25) {
    throw "Power saving on: Too hot!";
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
