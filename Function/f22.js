function add(x,y,z)
{
console.log(arguments);// to find the arguments
console.log(arguments.length)// to find the length of argument.
var i;
var total=0;
for(i=0;i<arguments.length;i++)
{
console.log(arguments[i]);
total=total+arguments[i];
}
return total;
}
console.log("TOTAL IS : ",add(10,20,30));