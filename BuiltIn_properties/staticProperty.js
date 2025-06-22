var Bulb=(function()
{
var brand;  //One copy of static property is shared by all objects.
function BulbConstructor(bb)
{
brand=bb;
this.aFunction=function()
{
console.log(brand);
}
}

BulbConstructor.prototype.bFunction=function()
{
console.log(brand);
}
return BulbConstructor;
})();

var b1=new Bulb("Philips");
b1.aFunction();
b1.bFunction();
var b2=new Bulb('UDAY');
b2.aFunction();
b2.bFunction();
b1.aFunction();
b1.bFunction();
