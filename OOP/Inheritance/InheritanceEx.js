class Rectange
{
constructor(length,breadth)
{
this.length=length;
this.breadth=breadth;
}
}

class Box extends Rectange //extends means Box is inheriting properties and methods from Rectangle
{
constructor(length,breadth,height)
{
super(length,breadth); //super calls the constructor of the parent class (Rectangle)
this.height=height
}
}

var b=new Box(10,50,4000);
console.log(b);