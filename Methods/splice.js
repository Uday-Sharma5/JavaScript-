//the splice() method is used to add, remove, or replace elements in an array at a specified index. It modifies the original array and returns the removed elements.

var u=[15,40,602,800];
var j=u.splice(3,1,40,30); //in 3rd element remove 1 number and replace it with 40,30.
console.log(u);
console.log(j);