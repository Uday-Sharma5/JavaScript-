function add(x,y,z,a,b,c)
{
return x+y+z+a+b;
}
function sam()
{
var i=add(...arguments) //IN HERE ARGUMENTS HOLD THE VALUE THAT ARE sam FUNCTION PASSING THE ARGUMENTS AND WHEN ADD FUNCTION RUNS IT SPREAD ALL THE ARGUMENTS.
return i;
}
console.log(sam(10,20,30,40,50));
