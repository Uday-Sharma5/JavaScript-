var x="100";
var y=20;
var z=x-y;
console.log(z);
if(z==80) //IN THE if CONDITIONAL BLOCK WE ARE NOT CHECKING THE TYPE OF THE VALUE Z BECAUSE == IS NOT FOR TYPE CHECKING.
{
console.log("True");
}
else console.log("False");

//BUT IF I WRITE === THEN WE ARE TAKLING ABOUT EQUALITY COMPARISON AND TYPE SHOULD BE SAME.

var j="90";
var u="10";
var k=j-u;
console.log(k);
if(k===80)
{
console.log("TRUE");
}
else console.log("False");