function Toy()
{
var brand="Philips";
this.price=0;
this.printprice=function()
{
console.log(this.price);
}
}


var t1=new Toy;
console.log(t1.brand);
t1.printprice();