const fs=require('fs');
fs.readFile("someFile.d","utf-8",function(err,data){
if(err)
{
console.log("Problem : ",err)
}
else
{
var k=data.split("\n");
console.log("Number of lines : "+(k.length-1));
k.forEach(function(line){
if(line.length>0) console.log("Line : ",line);
});
}
});