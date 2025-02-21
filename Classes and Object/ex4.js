function Toy()
{
var brand="UDAY";
this.price=0;
this.getbrand=function()
{
return brand;
};
function doSomething()
{
console.log("Whatever");
};
this.sam=function()
{
doSomething();
}
}

var t1=new Toy();
console.log(t1.brand); // also we cannot access brand beacuse brand is a variable .
console.log(t1.getbrand());
//t1.doSomething(); //WORNG BEACUSE THIS IS NOT A CLASS.
t1.sam();