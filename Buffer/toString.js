var s=Buffer.from("ABCD");
console.log(s);
var s2=Buffer.from("abcd");
console.log(s2);
var ss=s.toString(); //converted into string
console.log(ss);
var ss2=s2.toString();
console.log(ss2);
var k=s.toString("hex"); // I have specified encoding as hexadecimal
console.log(k);
