// normally we can do it like this

a=function(p,r)
{
console.log("Function exectued");
return p+r;
}
console.log(a(100,200));

// IMMEDITALY INVOKING THE FUNCTION 

b=function(p,r)
{
console.log("Function RUNS");
return p+r;
}(500,4000);

console.log(b);