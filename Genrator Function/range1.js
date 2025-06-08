function* range(s,e)
{
while(s<e)
{
yield s;
s++; 
}
}

var k=range(10,20);
for(var i of k)
{
console.log(i);
}