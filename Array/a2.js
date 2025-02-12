function add(x,y,z)
{
return x+y+z;
}
var a=[10,20,30];
console.log(add(a[0],a[1],a[2])); // THIS IS HOW WE PASS AN ARGUMENTS OF ARRAY 


// THERE IS A DIFFERENT STEP TO THIS CALLED spread syntax

function sum(x,y,z,u)
{
return x+y+z+u;
}
var s=[10,20,30,50];
console.log(sum(...s)) // WE USE SPREAD SYNTAX WHILE CALLING sum FUNCTION.
