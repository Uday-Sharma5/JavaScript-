var fs=require("fs");
fs.mkdir("bkc/lmn/kkk",{},function(e){            //mkdir expecting that bkc and lmn folder was already created and in that folder bkc/lmn trying to creates new folder kkk, but bkc/lmn has not exist.  
if(e)
{
console.log(e);
}
else
{
console.log("Folder created")
}
});