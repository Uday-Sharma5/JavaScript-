// Object.freeze() is a built in method that is used to freeze and object.
// means you cannot add a new property, connnot change the value of existing property, and you cannot change the value of exisiting property


var a={x:10,y:10}
console.log(a);
a.x=100;
a.y=200;
console.log(a);
Object.freeze({x:10,y:20}); 
console.log(a);
x=100000;
y=50000;
console.log(a)

