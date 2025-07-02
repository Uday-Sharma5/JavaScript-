function divide(divisor,divident,onError,onSucess)
{
setTimeout(function(){
if(divident==0)
{
onError("cannot divided by zero");
}
else
{
var quotient=Math.floor(divisor/divident);
var remainder=divisor%divident;
onSucess(quotient,remainder);
}
},2000);
}

function processError(e)
{
console.log(`Problem : ${e}`);
}
function processResult(q,r)
{
console.log(`After dividing ${a} by ${b}, the quotient is ${q} and the remainder is ${r}`);
}

a=10;
b=100;

divide(a,b,processError,processResult);


