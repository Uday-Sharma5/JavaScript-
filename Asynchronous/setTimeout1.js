// just like setInterval we use setTimeout to call repeatdly beacuse we declare setTimeout in a function so the control getbacks to the setTimeout 

function somefunc()
{
console.log("GOD IS GREAT");
setTimeout(somefunc,1000);
}
setTimeout(somefunc,2000);
console.log("HELLO WORLD");


