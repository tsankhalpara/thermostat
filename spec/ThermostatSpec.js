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

  describe("up", function() {
    it("increases temperature by 1", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe("down", function() {
    it("decreases temperature by 1", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
  });
  
});
