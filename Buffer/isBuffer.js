var fs=require("fs");
var d=fs.readFileSync("eg1.exe");
console.log(d);
console.log(Buffer.isBuffer(d));
var j=fs.readFileSync("eg1.c","utf-8");
console.log(Buffer.isBuffer(j));
console.log(j)