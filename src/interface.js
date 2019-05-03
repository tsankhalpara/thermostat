$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#on').text(thermostat.powerSavingOn());

  $('#off').text(thermostat.powerSavingOff());

  $('#usage').text(thermostat.usage());

  $('#reset').text(thermostat.reset());

  $('#up').on('mouseup', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  })


  $('#down').on('mouseup', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  })
})
