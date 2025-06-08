function* range(s,e)
{
while(s<e)
{
yield s;
s++;
}
}

var k=range(10,20);
var element=k.next();
while(element.done==false) 
{
console.log(element);
element=k.next();
}