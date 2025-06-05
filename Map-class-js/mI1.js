var v=new Map();
v.set(1,"JK");
v.set(2,"uda");
v.set(3,"NEERAJ");
v.set(4,"UJJAIN");
console.log(v);
var k=v.entries(); //.entries returns an itreation object that contains [key,value] pairs from the map
var element;
element=k.next(); // It doesn't return and array- it returns an itreator,which you can loop using .next()

while(!element.done) // The done property becomes true when the interator reaches the end.
// This means"keep looping as long as done is false"
// when there are no looping left, done becomes true and the loops stops.
{
console.log(element);
element=k.next();
}