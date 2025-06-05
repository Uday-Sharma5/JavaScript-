var v=new Map();
v.set(101,"Dubai");
v.set(102,"America");
v.set(103,"Ujjain");
v.set(104,"Russia");
v.set(105,"USA");
console.log(v);
//WE ONLY WANT TO FIND THE KEYS OF THE OBJECT
var key=v.keys();
var element=key.next();
while(!element.done)
{
console.log(element)
element=key.next();
}
