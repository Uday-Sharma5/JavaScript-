function sam() {
  // Inside this regular function, 'this' refers to the calling object
    this.a = 100;
  console.log(this); // Logs either global object or new object based on how 'sam' is called
}

// Adding a property 'xx' to the global object.
this.xx = 200;

// Logs the global object which now contains 'xx: 200'
console.log(this);

// Calling 'sam()' as a regular function
// So 'this' inside 'sam' refers to the global object
sam();

// Creating a new object using 'new'
// Now 'this' inside 'sam' refers to the newly created object
var a = new sam();
