var readline=require("readline");
function divide(divident,divisor,onSucess,onError)
{
var p=new Promise(function(doneNotifier,errorNotifier){
setTimeout(function(){
if(divisor==0)
{
errorNotifier("cannot Divieded by zero");
}
else
{
var r={
quotient:Math.floor(divident/divisor),
remainder:divident%divisor
}
doneNotifier(r);
}
},2000);
});
return p;
}

var a=0;
var b=0;

var ioInterface=readline.createInterface({
input:process.stdin,
output:process.stdout
})


ioInterface.question("Enter divident : ",function(ans){
a=ans;
ioInterface.question("Enter divisor : ",function(ans){
ioInterface.close();
b=ans;
var promise=divide(a,b);
promise .then(function(result){
var quotient=result.quotient;
var remainder=result.remainder;
console.log(`After dividing divident ${a} by divisor ${b}, the quotient is ${quotient} and remainder is ${remainder}`);
},function(error){
console.log("Problem "+ error);
});
});
});
