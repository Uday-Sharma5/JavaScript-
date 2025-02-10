// DIFFRENCE BETWEEN var AND let.

var x=10; //GLOBAL DECLARATION
function sam()
{
var x=100;  // LOCAL DECLARATION 
var y=20;
if(y==20)
{
let x=1000; // BLOCK LEVEL DECLARATION 
console.log(x);
}
console.log(x); //LOCAL x
}
sam();
console.log(x);// GLOBAL x