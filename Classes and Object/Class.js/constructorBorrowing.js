class Employee
{
constructor(name)
{
this.name=name;
}
}

var a=new Employee("Uday");
console.log(a.name);
var b=new a.constructor("NEERAJ"); //using constructor a to create b.
console.log(b.name);

console.log(a==b); //both have different address.

console.log(a instanceof Employee);
console.log(b instanceof Employee);