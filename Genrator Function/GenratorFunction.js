function* myGenerator() //Generator functions in JavaScript are a special type of function that can pause and resume their execution, allowing for the generation of a sequence of values over time. 
//They are defined using the function* syntax and use the yield keyword to pause execution and return a value. 
{
console.log("Starts");
yield 50;
yield 10;
yield 1000;
console.log("Ends"); 
}
var k=myGenerator();
console.log(i);
var i=k.next();
console.log(i);
i=k.next();
console.log(i);
i=k.next();
console.log(i);
i=k.next();
console.log(i);