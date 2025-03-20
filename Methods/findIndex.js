var x=[10,20,30,40,50,60,70,80,90,100];
function abcd(n)
{
return n>50;
}
console.log(x);
var y=x.findIndex(abcd); //IT FINDS THE INDEX OF THAT ELEMENT WHICH IS RETURNING.
console.log(y);