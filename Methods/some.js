function isAnybodyIndian(obj)
{
console.log("is AnybodyIndian got called : "+ obj.name);
return obj.country.toUpperCase()==="INDIA"; //toUpperCase() method convert the string into uppercase
}

var x=[
{"name":"rocky","country":"USA"},
{"name":"uday","country":"india"},
{"name":"bob","country":"america"},
{"name":"neeraj","country":"indIA"}
];
var b=x.some(isAnybodyIndian); //The .some() method in JavaScript checks if at least one element in an array passes a test (returns true) provided by a callback function.


if(b) console.log("Yes, Indian exist");
else console.log("NO, indian dont");