var tm=null;
var x=0;
function somefunc(a,b,c)
{
x++;
console.log(x,"cool",a,b,c);
if(x==3) clearInterval(tm);
}


tm=setInterval(somefunc,1000,"Happy","Birthday","TO ME");
console.log("GREATT");