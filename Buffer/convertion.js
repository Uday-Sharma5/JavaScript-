var e=Buffer.from("abcd");
console.log(e);
var d=e.toString("base64");
console.log(d);
var j=Buffer.from(d,"base64");
var k=j.toString("utf-8");
console.log(k);