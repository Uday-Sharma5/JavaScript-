function myCollection()
{
var collection=[];
this.add=function(num)
{
collection.push(num);
}
this.iterator=function*(){
var index=0;
while(index<collection.length)
{
yield collection[index];
index++;
}
}
}

var m=new myCollection();
m.add(50);
m.add(100);
m.add(150);
m.add(200);
m.add(500);
var k=m.iterator();

/* for(var i of e)
{
console.log(i);
}
 
*/


var element=k.next();
while(element.done==false)
{
console.log(element);
element=k.next();
}