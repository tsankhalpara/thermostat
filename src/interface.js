$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#on').on('mouseup', function() {
    thermostat.powerSavingOn();
    $('#power-saving-status').text(thermostat.powerSaving);
  });

  $('#off').on('mouseup', function() {
    thermostat.powerSavingOff();
    $('#power-saving-status').text(thermostat.powerSaving);
  });

  $('#usage-meter').text(thermostat.usage());

  $('#reset').on('mouseup', function() {
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
    if(thermostat.usage() === "high-usage") {
      $('#usage-meter').text(thermostat.usage());
    } else if (thermostat.usage() === "medium-usage") {
      $('#usage-meter').text(thermostat.usage());
    } else if (thermostat.usage() === "low-usage") {
      $('#usage-meter').text(thermostat.usage());
    }
  });

  $('#up').on('mouseup', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
    if(thermostat.usage() === "high-usage") {
      $('#usage-meter').text(thermostat.usage());
    } else if (thermostat.usage() === "medium-usage") {
      $('#usage-meter').text(thermostat.usage());
    } else if (thermostat.usage() === "low-usage") {
      $('#usage-meter').text(thermostat.usage());
    }
  });


  $('#down').on('mouseup', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
    if(thermostat.usage() === "high-usage") {
      $('#usage-meter').text(thermostat.usage());
    } else if (thermostat.usage() === "medium-usage") {
      $('#usage-meter').text(thermostat.usage());
    } else if (thermostat.usage() === "low-usage") {
      $('#usage-meter').text(thermostat.usage());
    }
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=c92489a7ba71989f7ffb08db9b9ec5dc&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c92489a7ba71989f7ffb08db9b9ec5dc&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  });

})
