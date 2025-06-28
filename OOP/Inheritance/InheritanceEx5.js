
class aaa
{
constructor()
{
this.x=10;  //class aaa is defined with a constructor that sets this.x = 10.

}
}


//aFunction(someclass) is a higher-order function that takes a class as an argument (someclass) and returns a new class that extends it. This returned class has its own constructor, which calls super() (to invoke the someclass constructor) and sets this.y = 20.

function aFunction(someclass)
{
return class extends someclass
{
constructor()
{
super();
this.y=20;
}
};
}

//class bbb then extends the class returned by aFunction(aaa). That means bbb ultimately inherits from aaa via the intermediate class returned by aFunction.



//Inside bbb's constructor, super() is called to execute the constructor of the intermediate class (from aFunction), which in turn calls aaa's constructor. Then, bbb sets this.z = 50.
class bbb extends aFunction(aaa)
{
constructor()
{
super();
this.z=50;
}
}

var b=new bbb();
console.log(b);