var a=process.argv[2];
try
{
if(a=="good") b=20;
console.log(b);
}catch(error)
{
console.log(error.message);
}
finally   //.finally() is a method used with Promises. It allows you to execute some code after the promise is settled, regardless of whether it was resolved or rejected. 
{
console.log("The end");
}
