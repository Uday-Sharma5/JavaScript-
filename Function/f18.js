function toy()
{
this.price=1000;
}
function add(x,y)
{
return x+y;
}

var t=new toy();
console.log("Price is : ",t.price);
console.log("Total is ",add(100,100));
t2=new toy();
console.log("PRICE : ",t2.price);
t2.price=100000;
console.log("PRICE : ",t2.price);
var t3=t2; // which address is in t2 it assgin to t3, and now to whom t3 is pointing to object t2 is also starts pointing to whom address is in t3.
t3.price=90;// we assgins the 90 to whom t3 is pointing to
console.log("PRICe : ",t3.price); 
console.log(t2.price);// BUT HERE WE DIDNT CHANGED THE VALUE OF t2 BUT WE GIVES THE ADDRESS OF t2 TO t3 BOTH HAVE THE SAME ADDRESS AND NOW WE CAN MANIPULATE t2 FORM t3.
console.log(t2); // T2 IS toy TYPE OBJECT.