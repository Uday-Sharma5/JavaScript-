var x=new Array();
x[0]=45;
x[1]=566;
x[2]=789;
x[3]=555;
x[4]=4587;

var y;
while(x.length>0)
{
y=x.shift(); // SHIFTING THE ELEMENT OF ARRAY TO y.
console.log(y);
}

console.log(x);