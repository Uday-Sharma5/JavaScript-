// Import events module from Node.js
const events = require("events");

// Create a Bulb class that extends EventEmitter
// This means Bulb can emit events and listen to events
class Bulb extends events.EventEmitter {
  
  constructor() {
    super(); // call parent constructor (EventEmitter)
    this._wattage = 0; // store actual wattage internally
  }

  // Setter function for wattage
  // Called when we assign b1.wattage = someValue
  set wattage(value) {
    console.log("Setter got called");

    // If the new wattage is same as the old one, do nothing
    if (this._wattage === value) return;

    // Save old wattage before changing
    let oldWattage = this._wattage;

    // Update wattage value
    this._wattage = value;

    // Emit a custom event "Wattage Changed"
    // Pass old and new wattage values to event listeners
    super.emit("Wattage Changed", oldWattage, this._wattage);
  }

  // Getter function for wattage
  // Called when we use console.log(b1.wattage)
  get wattage() {
    console.log("Getter got called");
    return this._wattage; // return stored wattage
  }
}

// Create a new Bulb object
var b1 = new Bulb();

// Add an event listener for "Wattage Changed" event
// Whenever wattage changes, this function will run
b1.on("Wattage Changed", function(oldWattage, newWattage) {
  console.log(`Wattage has changed from ${oldWattage} to ${newWattage}`);
});

// Change wattage → this will call setter and trigger event
b1.wattage = 60;

// Access wattage → this will call getter
console.log(b1.wattage);

// Change wattage again → setter + event
b1.wattage = 100;

// Access wattage again → getter
console.log(b1.wattage);
