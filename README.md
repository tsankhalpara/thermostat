## Thermostat Challenge

### Task
A Makers Academy Week 5 weekly challenge, to help us to learn a new language (Javascript). The task was to test drive a simple front-end web app using Javascript, with the specification below. It uses a weather API to check the weather of your current location, so that you can adjust your thermostat accordingly.

### Steps
- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.

### How to run
- Clone this repo
- From the command line, type 'open index.html'
- You can select your city from the drop-down menu, to check the current weather and adjust your thermostat accordingly
- If power-saving mode is on, you won't be able to increase the temperature higher than 25 degrees. If you turn it off, you can increase up to 32. Turning power save mode off, increasing the temperature and then turning power save mode back on will change the maximum back to 25 again.

### Testing
#### Unit test
* Clone this repo
* From the command line, type 'open SpecRunner.html'
* The unit tests all pass
