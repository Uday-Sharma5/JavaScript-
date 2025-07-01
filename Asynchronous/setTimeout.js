function somefunction() 
{
console.log("cool");
}
setTimeout(somefunction, 2000);  // somefunction runs asynchronously because setTimeout is a function where we pass a function reference and a timer in milliseconds.


console.log("great");

// "great" will be printed immediately, and after 2 seconds, somefunction will be called and "cool" will be printed.
