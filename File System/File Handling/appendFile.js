const fs=require("fs");
fs.appendFile("someFile.d","God is great\n I live in ujjain\n","utf-8",function(error){
if(error)
{
console.log(error);
}
else
{
console.log("Data written to file");
}
});