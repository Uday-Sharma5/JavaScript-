function func(a,b,c,d)
{
console.log(a);
console.log(b);
console.log(c);
console.log(d);
return a+b;
}

var x=[10,20,30,40,50];
var y=x.reduce(func,0); // reduce - The reduce() method in JavaScript is a powerful array method used to reduce an array to a single value by executing a callback function on each element of the array.
console.log(x);
console.log(y);