x=10; //global variable
function sam()
{
console.log(x); // we can acces x because it is global
var x=10000; // local variable of sam function
console.log(x);
}
console.log(x);//global variable prints. 
sam();
