var fs=require("fs");
fs.rmdir("kkk",{},function(e){
if(e) console.log(e);
else console.log("Folder Deleted");
});