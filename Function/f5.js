// LOCAL VARIBALE CAN ONLY BE IN HIS FUNCTION ONLY NOT TO BE IN OTHER FUNCTIONS

function sam()
{
var y; //local variable
y=10;
console.log(y);
}

function uday()
{
console.log(y); // cannot exist 
}

sam();
uday();
