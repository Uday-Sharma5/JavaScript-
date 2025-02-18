function Toy()
{
this.brand=" ";
this.price=0;
this.manual=function()
{
console.log("B:AH B:AH ABOUT "+this.brand+",which is a toy");
};
}

var t1=new Toy();
t1.brand="lego";
t1.price=1220;
console.log("BRAND : "+ t1.brand +", PRICE : " + t1.price);
t1.manual();