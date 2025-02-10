var x=10; // GLOBALDECLARATION
function sam()
{
var x=100; // LOACAL DECLARATION
var y=20;
if(y==20)
{
var x=1000; //IT CANNOT BE TREATED AS DIFFERENT VARIABLE, BEACUSE IT IS IN A FUNCTION AND WE ALREADY DECLARED AT THE START OF THE FUNCTION.
console.log(x); //local
}
console.log(x); // local
}

sam();
console.log(x); // GLOBAL X