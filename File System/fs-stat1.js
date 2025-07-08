var fs=require("fs");
fs.stat("sdjo.jf",function(resolve,reject){
if(reject)
{
console.log(reject);
}
else
{
console.log(resolve);
}
});


// "sdjo.jf" it give a random file name to fs, so it rejects the file and error genrated ENOENT errorNoEntry