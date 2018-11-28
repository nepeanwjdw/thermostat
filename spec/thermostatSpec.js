describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
      thermostat = new Thermostat();
});

  it("starts at 20 degrees", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("increases temperature with an up function", function() {
    thermostat.up();
    expect(thermostat.temp).toEqual(21);
  });

  it("decreases temperature with a down function", function() {
    thermostat.down();
    expect(thermostat.temp).toEqual(19);
  });

  it("has a minimum of 10 degrees", function() {
      thermostat.temp = 10;
      thermostat.down();
      expect(thermostat.temp).toEqual(10);
  });

  it("has Power Saving mode on by default", function() {
    expect(thermostat.isPowerSaving).toBeTruthy();
  });

  it("can reset the temp to 20 with a reset function", function() {
    thermostat.temp = 24;
    thermostat.reset();
    expect(thermostat.temp).toEqual(20);
  });

  describe("when low-usage", function() {
    it("energyUsage should return 'low-usage'", function() {
      thermostat.temp = 17;
      expect(thermostat.energyUsage()).toEqual("low-usage");
    })
  });

  describe("when medium-usage", function() {
    it("energyUsage should return 'medium-usage'", function() {
      thermostat.temp = 24;
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    })
  });

  describe("when high-usage", function() {
    it("energyUsage should return 'high-usage'", function() {
      thermostat.temp = 25;
      expect(thermostat.energyUsage()).toEqual("high-usage");
    })
  });

  describe("when power saving mode is on", function() {
    it("has a maximum temperature 25 degrees", function() {
      thermostat.temp = 25;
      thermostat.up();
      expect(thermostat.temp).toEqual(25);
    });
  });

  describe("when power saving mode is off", function() {
    it("has a maximum temperature 25 degrees", function() {
      thermostat.togglePowerSaving()
      thermostat.temp = 32;
      thermostat.up();
      expect(thermostat.temp).toEqual(32);
    });
  });



});
