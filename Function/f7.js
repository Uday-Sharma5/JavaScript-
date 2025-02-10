function uday()
{
x=100; // X SHOULD BE TRETEAD AS GLOBAL VARIABLE
console.log(x);
}
function sam()
{
console.log(x);// GLOBAL VARIABLE
}
uday();
sam();