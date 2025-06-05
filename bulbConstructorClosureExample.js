var Bulb=(function(){
var code=0;
var ds={};
function BulbConstructor(br)
{
code++;
this.code=code;
ds[this.code]={};
ds[this.code].brand=br;
this.aFunction=function()
{
console.log(ds[this.code].brand);
}
}
BulbConstructor.prototype.bFunction=function()
{
console.log(ds[this.code].brand);
}
return BulbConstructor;
})();

var b1=new Bulb('Philips');
b1.aFunction();
b1.bFunction();
var b2=new Bulb('Lenovo');
b2.aFunction();
b2.bFunction();
b1.aFunction();
b1.bFunction();
