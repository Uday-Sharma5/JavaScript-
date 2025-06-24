function Rectange()
{
this.breadth=50;
this.length=50;
}
function Box()
{
this.height=50;
Rectange.apply(this); // applying rectange to this
}
var b=new Box();
console.log(b);