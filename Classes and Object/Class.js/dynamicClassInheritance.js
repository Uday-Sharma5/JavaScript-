class aaa
{
constructor()
{
this.x=50;
}
}
function aFunction()
{
return aaa;
}

function bFunction(somefunc)
{
return class extends somefunc{
constructor()
{
super();
this.y=100;
}
}
}

var bbb=new bFunction(Object)

class ccc extends bFunction(aaa)
{
constructor()
{
super();
this.z=150;
}
}
class ddd extends bFunction(ccc)
{
constructor()
{
super();
this.k=50000;
}
}



var c=new ccc();
console.log(c);
var d=new ddd();
console.log(d);