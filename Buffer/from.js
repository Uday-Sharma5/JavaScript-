var d=[10,50,60,11,10];
// Create a Buffer 'c' from the array 'd'
// Buffer is a built-in class in Node.js used to handle binary data (raw memory)
// Buffer.from(array) creates a new buffer containing the bytes from the array
var c=Buffer.from(d); 
console.log(c);