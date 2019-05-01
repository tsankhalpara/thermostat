function Thermostat() {
  this.temperature = 20
};

Thermostat.prototype.up = function () {
  return this.temperature = (this.temperature + 1)
};
