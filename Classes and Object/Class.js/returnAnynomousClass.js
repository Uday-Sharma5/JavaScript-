function someFunc()
{
return class{   //AN ANYNOMOUS CLASS HAS BEEN RETURNED
constructor()
{
this.x=10;
}
};
}

var a=someFunc();
var b=new a();
console.log(b);