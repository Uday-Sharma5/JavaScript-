// TYPES OF FUNCTION:-

//NAMED FUNCTION
function add(x,y)
{
return x+y;
}
add(100,200);

//NAMED EXPRESSION FUNCTION
var k=function doSomething(x,y)
{
return x+y;
}
// console.log(doSomething(10,20)); //WRONG
console.log("TOTAL IS",k(10,200));

//ANONYMOUS FUNCTION 
var kk=function(x,y)
{
return x+y;
}
console.log(kk(1000,45));

//FAT ARROW,LAMDA EXPRESSION,ARROW FUNCTION

var uday=(x,y)=>x+y;
console.log(uday(10,2000));
var git=x=>x*x;
console.log(git(500));