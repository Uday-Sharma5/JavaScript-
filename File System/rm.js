var fs=require("fs");
fs.rm("Folder1",{recursive:true},function(e){
if(e) console.log(e);
else console.log("Folder Deleted");
});