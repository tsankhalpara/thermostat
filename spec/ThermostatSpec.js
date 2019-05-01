describe ( "Thermostat", function(){
  var thermostat;

  beforeEach( function(){
    thermostat = new Thermostat();
  });

  describe( "initial temperature", function() {
    it('has temperature of 20 degrees', function() {
      expect(thermostat.startTemp).toEqual(20);
    });
  });

});
