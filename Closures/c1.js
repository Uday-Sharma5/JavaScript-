function add(x,y,z)
{
return x+y+z;
}

function whatever(f)
{
return function(p,q){
return f(p,q,0);
};
}

var addIt=whatever(add); //WHEN WE ARE CALLING WHATEVER FUNCTION AND GIVING add FUNCTIONS ADDRESS AS AN ARGUMENT, AND WHATEVER FUNCTION RETURNS A FUNCTION THAT ASSGIN TO addIt.
console.log(addIt(10,20)); // IN addIt FUNCTION A FUNCTION IS IN IT THAT RUNS WHEN addIt CALLS.