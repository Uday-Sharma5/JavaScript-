class aaa
{
static sam()  // IF MEHTOD IS STATIC THEN IT WILL ONLY ACCESSED BY USING THEIR CLASS NAME
{
console.log("great");
}
tom()
{
console.log("Cool");
}
}

let a= new aaa();
aaa.sam();
a.tom();