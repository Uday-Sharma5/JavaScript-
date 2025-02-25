var x=[10,20,30,40,50,60,70,80,90,100];
function doSomething(n)
{
console.log("do something got called : "+n);
return n%2==0;
}
console.log(x.every(doSomething)); //The .every() method in JavaScript is an array method used to test whether all elements in an array pass a given condition (provided by a callback function). It returns true if all elements satisfy the condition; otherwise, it returns false.