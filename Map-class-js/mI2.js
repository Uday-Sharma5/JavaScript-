var v=new Map();
v.set(1,"Dubai");
v.set(2,"Ujjain");
v.set(3,"indore");
v.set(4,"Bhopal");
var k=v.entries();
var element=k.next();
while(!element.done)
{
console.log(element.value);
[key,value]=element.value // in element.value has 2 element in which 1 is key and the 2nd one is value 
console.log(key);
console.log(value);
element=k.next();
}