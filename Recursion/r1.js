function sam(p)
{
if(p==1) return 1;
var n=sam(p-1)*p;
return n;
}
x=sam(5);
console.log(x);