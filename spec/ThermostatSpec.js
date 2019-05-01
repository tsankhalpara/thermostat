describe ( "Thermostat", function(){
  var thermostat;

  beforeEach( function(){
    thermostat = new Thermostat();
  });

  describe( "initial temperature", function() {
    it('has temperature of 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe( "initial power saving mode", function() {
    it('is on by default', function() {
      expect(thermostat.powerSaving).toEqual(true);
    });
  });

  describe("up", function() {
    it("increases temperature by 1", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
    describe("power saving on", function() {
      it("does not allow temperature to be more than 25", function() {
        thermostat.temperature = 25;
        expect(function() {thermostat.up()}).toThrow("Power saving on: Too hot!");
      });
    });
    describe("power saving off", function() {
      it("does not allow temperature to be more than 32", function() {
        thermostat.temperature = 32;
        thermostat.powerSaving = false;
        expect(function() {thermostat.up()}).toThrow("Too hot!");
      });
    });

  });

  describe("down", function() {
    it("decreases temperature by 1", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
    it("does not allow temperature to be less than 10", function() {
      thermostat.temperature = 10;
      expect(function() {thermostat.down()}).toThrow("Too cold!");
    });
  });

  describe("reset", function() {
    it("sets temperature back to 20 degrees", function() {
      thermostat.temperature = 30;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

});
