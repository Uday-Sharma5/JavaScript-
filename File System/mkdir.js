var fs=require("fs");

fs.mkdir("kkk",{},function(e){           //if any occured it stored in e.
if(e)
{
console.log(e);
}
else
{
console.log("Folder created");
}
})
console.log("HELLO WORLD");

//fs.mkdir is also runs asyncronously 
