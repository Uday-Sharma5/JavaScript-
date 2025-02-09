// WE CANNOT ACCESS THE LOCAL VARIABLES OF A FUNCTION FROM OUTSIDE OF THAT FUNCTION.

var i=101;
function add(x,y)
{
var z=x+y;
console.log(z);
}

add(10,20);
console.log(x); // This is incorrect beacuse x is local variable of add function 
add(1000,1);
console.log(y); // This is incorrect beacuse y is local variable of add function