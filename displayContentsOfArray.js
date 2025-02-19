var u;
u=new Array();
u[0]=120;
u[1]=45;
u[2]="GOD IS GREAT";
u[3]=new Array('UDAY SHARMA',4500);
u[4]=new Array(5);
u[4][0]=[10,20,30];
u[4][1]=["GREAT",4568];

function displayContentsOfArray(j)
{
console.log("STARTS PROCESSING");
if(Array.isArray(j))
{
var i=0;
while(i<j.length)
{
var h=j[i]
if(Array.isArray(h)) displayContentsOfArray(h);
else console.log(h);
i++;
}
}
else
{
console.log(j);
}
}
displayContentsOfArray(u);