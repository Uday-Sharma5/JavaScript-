function someFunction()
{
return class{
constructor()
{
this.x=10;
}
};
}

class bbb extends someFunction()
{
constructor()
{
super();  //super():Must be called before using this
//super() is calling the constructor of the parent class, which is dynamically returned by the function someFunction()
this.y=20;
}
}

var b=new bbb();
console.log(b);