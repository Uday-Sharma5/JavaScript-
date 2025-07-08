
var fs=require("fs") //fs(file system)module is used to retrive detailed information about a file or directory at a given path
fs.stat("eg1.js",function(e,s){    //fs.stat() method, part of built in fs. 
//fs.stats object containing various properties and methods to query the file's charactrisitics.
if(e)
{
console.log(e);
}
else
{
console.log(s)
}
})



console.log("Hello world");  // The fs.stats() method is asynchronous and typically used with a callback function.
