var a={};
a[Symbol.iterator]=function*(){
yield 20;
yield 30;
yield 40;
}
for(var b of a)
{
console.log(b);
}
var jk=[...a] // a is iterable and it spread all the elements in jk.
// all the iterable a returns it assign to jk
console.log(jk);
