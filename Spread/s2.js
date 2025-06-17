var m=[10,20,30,40,50];
var k=[...m]; //we are using spread syntax for extracting all the elements of m and assign it to k.
k[1]=10000;
console.log(m);
console.log(k);