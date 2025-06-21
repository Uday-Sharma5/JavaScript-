//IF WE ASSIGN X TO UNDEFINED THEN IT WILL BE FALSE.
var g=undefined;
if(g) console.log("true");
else console.log("false");

//BUT IF WE ASSIGN Infinty TO VARIABLE x THEN IT WILL BE FALSE BEACUSE IN OTHER CASES LIKE NULL UNDEFINED AND EMPTY STRING ALL OF THESE ARE EMPTY, BUT IN Infinity IT CONTAINS SOME VALUE THAT'S WHY IT IS TRUE.

var uday=Infinity;
if(uday)
{
console.log("TRUE");
}
else console.log("FALSE");