const fs=require('fs');
var data=fs.readFileSync("Whatever.d","utf-8");
var k=data.split("\n");
for(var e=0;e<k.length;e++)
{
if(k[e].length>0)
{
console.log("line : ",k[e]);
}

}