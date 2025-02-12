// WE CAN CREATE A CLASS USING FUNCTION KEYWORD AND FUNCTION IS ALSO CREATED THROUGH FUNCTION KEYWORD.
// WHICH CLASS OBJECT HAS CREATED IT SEEMS TO BE LIKE A CONSTRUCTOR.

function abcd()
{
}

function doSomething()
{
}

var a=new abcd(); //CONSTRUCTOR [a is a pointer].
doSomething(); //we called doSomething function 
console.log(a); //in here abcd class object get print.
console.log(doSomething);

 