function abcd()
{
this[Symbol.iterator]=function*(){
yield 10;
yield 20;
yield 30
}
}

var a=new abcd(); // a is not listed type, a is iterable.
for(var i of a)
{
console.log(i);
}
var jk=[...a];
console.log(jk);
