// IF WE CANNOT WRITE var IN FUNCTION THEN IT IS NOT TO BE CALLED AS A LOCAL VARIBALE IT IS CALLED AS A GLOBAL VARIABLE.

var x;
x=10;
function sam()
{
console.log(x); //global varibale
x=1000;  //new value assigned for x which is global varible.
console.log(x);
} 

console.log(x); //global
sam();
console.log(x);  //global