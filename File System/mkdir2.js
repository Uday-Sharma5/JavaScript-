var fs=require("fs");
fs.mkdir("bkc/lmn/pqr",{recursive:true},function(e){
if(e)
{
console.log(e);
}
else
{
console.log("Folder created");
}
});

