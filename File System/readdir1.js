var fs=require('fs');
fs.readdir(".",function(e,files){
files.forEach(function(files){
fs.stat(files,function(error,stat){
if(stat.isFile()) console.log("File : "+files);
if(stat.isDirectory()) console.log("Directory : "+files);
})
})
})