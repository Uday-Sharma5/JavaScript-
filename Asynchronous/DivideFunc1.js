var readline=require("readline");

function divide(divident,divisor,onSucess,onError)
{
if(divisor==0)
{
onError("Not divisible by zero ");
}
else
{
var quoitent=Math.floor(divident/divisor);
var remainder=divident%divisor;
onSucess(quoitent,remainder);
}
}		

var iointerface=readline.createInterface({
input:process.stdin,
output:process.stdout
});
var a=0;
var b=0;


function processResult(q,r)
{
console.log(`after dividing ${a} by ${b}, the quotient ${q} and remainder ${r}`);
}
function processError(e)
{
console.log(`Problem : ${e}`);
}

iointerface.question("Enter divident : ",function(answer){
a=answer;
iointerface.question("Enter divisor : ",function(answer){
iointerface.close();
b=answer;
divide(a,b,processResult,processError);
});
})
