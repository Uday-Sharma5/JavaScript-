const fs=require('fs');
fs.readFile("someFile.d","utf-8",function(e,data){
if(e) console.log("Problem : ",e);
else console.log(data);
})