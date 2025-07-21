var d=Buffer.alloc(10,1); // All the elements is initialized by 1
console.log(d);
d.fill(0) //All the values in buffer is initialized by 0.
console.log(d);
d[0]=100;
d[1]=25;
d[2]=50;
d[3]=36;
for(var i of d)
{
console.log(i);
}
console.log("Length is : "+d.length);