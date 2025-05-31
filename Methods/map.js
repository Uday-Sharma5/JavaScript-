function resolveState(element,index,arr)
{
var MP=["Ujjain","Indore","Bhopal","Dewas","Agar"];
var maharashtra=["Mumbai","Pune","Satara","Ghatkopar"];
if(MP.indexOf(element)!=-1)
{
var obj={
"City": element,
"State": "Madhya Pradesh"
};
return obj;
}
if(maharashtra.indexOf(element)!=-1)
{
var obj={
"City": element,
"State": "Maharashtra"
};
return obj;
}
var obj={
"Cities": element,
"State": "unknown"
}
return obj;
}

var cities=["Bhopal","Pune","Mumbai","Sagar","Indore","Kashmir","Lonavala","Ujjain","Goa"];
var x=cities.map(resolveState);  //the .map() method is used on arrays to create a new array by applying a provided function to each element of the original array.
console.log(x);


