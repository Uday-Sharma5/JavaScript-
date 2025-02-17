// A INNER FUNCTION USES THE VARIABLE OF OUTER FUNCTIONS THAT TYPE OF FUNCTIONS KNOWNS AS CLOSURES.

//IF A INNER FUNCTION USES THE VARIABLE OF OUTER FUNCTION THEN A OBJECT IS GETS CREATED INTERNALLY THEN THE VALUE OF OUTER IS BINDED TO THAT INNER.

function printReport(x,y)
{
console.log("Some Report related data",x,y);
}

function addHeader(func,sh)
{
console.log('ADD HEADER GOT CALLED WITH HEADER AS',sh);
function proxy(p,q) 
{
console.log(sh); //inner function uses the variable sh of outer function.
console.log(p,q)
}
return proxy;
}


kkk=addHeader(printReport,"Ujjain Population report");
kkk(100,200);
