class aaa
{
static x=100;
constructor()
{
this.y=500;
}

static sam()
{
console.log(aaa.x);
console.log("Great");
console.log(this.y);
console.log(this); // this IN STATIC REPRESENTS CLASS
}
tom()
{
console.log(aaa.x);
console.log("Cool");
console.log(this.y);
console.log(this); // this IN NON STATIC REPRESENTS OBJECT
}
}

let a=new aaa();
aaa.sam();
a.tom();