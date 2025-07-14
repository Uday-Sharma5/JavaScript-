const readline=require('readline');
const pth=require('path');
const fs=require('fs');

function askQuestion(query){
var ioInterface=readline.createInterface({
input:process.stdin,
output:process.stdout
});

return new Promise(function(resolve){
ioInterface.question(query,function(ans){
ioInterface.close();
resolve(ans);
});
});
}

async function walkPath(folderPath)
{
let files=fs.readdirSync(folderPath);
let i=0;
let file=null;
while(i<files.length)
{
file=files[i];
st=fs.statSync(folderPath+pth.sep+file);
if(st.isFile())
{
console.log("File : "+folderPath+pth.sep+file);
}

if(st.isDirectory())
{
console.log("Directory : "+folderPath+pth.sep+file);
const ans=await askQuestion(`Do you want to enter(y/n) : `);
if(ans=="y")
{
await walkPath(folderPath+pth.sep+file)
}
}
i++;
}
}

walkPath(pth.sep+"ProgrammingPracticals");