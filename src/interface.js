$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemperature());
})

$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#power_saving_on').text(thermostat.powerSavingOn());
})

$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#power_saving_off').text(thermostat.powerSavingOff());
})

$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#usage').text(thermostat.usage());
})

$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#reset').text(thermostat.reset());
})

$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#up').text(thermostat.up());
})

$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#down').text(thermostat.down());
})
