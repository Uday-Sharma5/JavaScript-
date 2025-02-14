// while calling a function and it returns the address of a function

function justDoIt()
{
function justCoolIt(){
console.log("COOOL");
}
return justCoolIt;
}
var a=justDoIt(); //WHEN justDoIt FUNCTIONS CALLS IT RETURNS THE ADDRESS OF justCoolIt FUNCTION AND IT ASSGIN TO a.
a(); //WHOSE FUNCTIONS ADDRESS IS IN a IT RUNS.