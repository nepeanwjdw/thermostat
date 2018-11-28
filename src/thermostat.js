function Thermostat () {
  this.temp = 20;
  this.isPowerSaving = true;
};

Thermostat.prototype.up = function() {
  if ( this.isPowerSaving ) {
    if ( this.temp < 25 ) {
      this.temp ++;
    };
  }
  else {
    if ( this.temp < 32 ) {
      this.temp ++;
    };
  };
};

Thermostat.prototype.down = function() {
    if ( this.temp > 10 ) {
      this.temp --;
    // }
    // else {
    //   alert( "Minimum temperature is 10 degree!")
  };
};

Thermostat.prototype.energyUsage = function() {
  var text = "high-usage"
  if (this.temp < 18) {
    text =  "low-usage";
  } else if (this.temp < 25) {
    text = "medium-usage";
  };
  return text
};


Thermostat.prototype.togglePowerSaving = function() {
  this.isPowerSaving = !this.isPowerSaving;
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
};
