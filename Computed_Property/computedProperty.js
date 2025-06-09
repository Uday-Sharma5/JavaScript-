var e="Cool"; 
var m={
[e]:"GREAT"  // If a variable is written inside square brackets while defining an object, it is used as the property name of the object, not as a variable itself — only the value of that variable is assigned.
};
console.log(m); 
console.log(m.Cool);