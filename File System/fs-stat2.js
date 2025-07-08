var fs=require("fs");
fs.stat("eg1.js",function(e,s){
if(e)
{
console.log(e);
}
else
{
console.log(s);
console.log(s.isFile()); //it inbuilt method provided by fs.
//it returns true if its a regular file.
console.log(s.isDirectory());////it inbuilt method provided by fs.
//It returns true if the given path is a directory
}
});