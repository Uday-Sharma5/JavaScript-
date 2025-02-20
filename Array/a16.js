function student()
{
this.rollNumber=55;
this.name="UDAY";
this.gender="M";
}

var k=new student();
console.log(k.rollNumber);
console.log(k.name);
console.log(k.gender);

console.log(k["rollNumber"]); // K IS POINTING TO AN OBJECT AND THE PROPERTY OF THAT K IS ROLLNUMBER AND WE CAN ACCESS TO THEM LIKE THIS ALSO.
console.log(k["name"]);
console.log(k["gender"]);
console.log(k);

k.city="Ujjain"; //WE CAN DYNAMICALLY ADD ATTRIBUTES
console.log(k);

console.log(k.length) //UNDEFINED