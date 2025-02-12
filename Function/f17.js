// TO EVERY NON STATIC METHOD OF THE CLASS A this POINTER PROVIDED BY THE COMPILER.

// this POINTER STORS A ADDERESS OF THE OBJECT FOR WHICH THE METHOD HAS BEEN CALLED. 




function Toy()
{
this.price=100;
}
function add(x,y)
{
return x+y;
}

var t=new Toy(); // we created a object of Toy type and assgined in t
console.log("Price of toy : ",t.price);// whom t is pointing to the value of price is printed.
t2=new Toy(); 
console.log("Prince of Toy : ",t2.price);
t2.price=10000;
console.log("price of tot : ",t2.price); //t2 object price is changed.
console.log("price of toy : ",t.price); // t object price is not changed because t and t2 object is different.