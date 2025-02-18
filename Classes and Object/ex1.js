// THERE ARE TWO TYPES OF CREATING A CLASS 1.) BY THE USE OF function KEYWORD 2.) BY THE USE OF class KEYWORD 

function Toy()
{
this.brand=" ";
this.price=0;
this.manual=function()
{
console.log("BLAH BALH : "+ this.brand +"which is a toy");
}
}

var t1=new Toy();

