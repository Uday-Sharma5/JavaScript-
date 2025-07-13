var fs=require('fs');
function getStats(f)
{
var promise=new Promise(function(resolve,reject){
fs.stat("eg1.js",function(e,s){
resolve(s);
})
})
return promise;
}

async function main()
{
var s=await getStats("eg1.js");
console.log(s);
console.log(s.isFile());
console.log(s.isDirectory());
}
main();
console.log("HEllo world");
