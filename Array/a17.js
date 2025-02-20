var x=[]; // AN ARRAY TYPE OBJECT HAS BEEN CREATED AND X NAMED POINTER IS POINTING TO THAT OBJECT.

x["good"]=4548; // THIS IS MAKING THE PART OF THIS ARRAY THIS CAN BE ADDED AS A DYNAMIC PROPERTY OF THAT ARRAY.
x.bad=4050;
x[0]=45454;
x[1]="UDAY";
console.log(x);
console.log(x.length);
for(var i=0;i<x.length;i++)
{
console.log(x[i]);
}

console.log(x.good);
console.log(x['bad']);
