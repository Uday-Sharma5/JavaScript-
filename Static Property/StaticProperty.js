class aaa
{
static x; // ONE COPY OF X WILL BE MAINTAINED
constructor(a,b)
{
//this.x=a; - Mistake: `this.x` creates an *instance* property, not related to static `x`
aaa.x=a;
this.y=b;
}
}

let a1=new aaa(100,200);
console.log(a1);
console.log(aaa.x); // Not attached to 'this' — it's on the class itself.
let a2=new aaa(50,20);
console.log(a2);
console.log(aaa.x); 