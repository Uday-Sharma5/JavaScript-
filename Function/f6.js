var x=50; //GLOBAL VARIABLE
function sam()
{
var x=100;
console.log(x); // IT PRINTS LOCAL VARIABLE
}
function tom()
{
x=100; //THE GLOBAL VARIABLES VALUES IS CHANGED 
console.log(x);
}
sam();
tom();