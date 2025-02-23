//solution of splice2.js example

var x=[10,20,30,40,50];
var y=[100,200,300,400];
for(var i=0;i<y.length;i++)
{
x.splice(x.length,0,y[i]);
}
console.log(x);