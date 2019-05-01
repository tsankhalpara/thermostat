function Thermostat() {
  this.temperature = 20
};

Thermostat.prototype.up = function () {
  return this.temperature = this.temperature + 1 ;
};

Thermostat.prototype.down = function () {
  if (this.temperature === 10) {
    throw "Too cold!";
  } else {
    return this.temperature = this.temperature - 1 ;
  }
};
