function add(x,y,z,a,b)
{
return x+y+z+a+b;
}
var a=[10,20,30,40,50];
console.log(add(...a)); // spread syntax for passing the elements of an array like arguments
