const pth=require('path');
const fs=require('fs');
let files=fs.readdirSync(".");
let file=null;
let i=0;
let st=null;

while(i<files.length)
{
file=files[i];
st=fs.statSync(file);
if(st.isFile())
{
console.log("File : "+file);
}
if(st.isDirectory())
{
console.log("Directory : "+file);
}
i++;
}