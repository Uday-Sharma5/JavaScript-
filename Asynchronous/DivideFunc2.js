
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

var a=10;
var b=2;
var promise=divide(a,b);
promise .then(function(result){
var quotient=result.quotient;
var remainder=result.remainder;
console.log(`After dividing divident ${a} by divisor ${b}, the quotient is ${quotient} and remainder is ${remainder}`);
},function(error){
console.log("Problem "+ error);
});
