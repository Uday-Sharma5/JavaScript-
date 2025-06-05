var v=new Map();
v.set(101,"Dubai");
v.set(102,"Ujjain");
v.set(103,"indore");
v.set(104,"USA");
v.set(105,"Russia");
console.log(v);

for(var uday of v)
{
console.log(uday);
[a,b]=uday;
console.log("Key : " +a+ " Value : "+b);
}