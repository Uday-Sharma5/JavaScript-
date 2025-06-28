class aaa
{
constructor()
{
this.y=50;
}
}

class bbb extends aaa
{
constructor()
{
super();   // Must call super constructor in dervied class before accessing 'this' or returing from dervied constructor.
this.x=5000;
}
}

var m=new bbb();
console.log(m);