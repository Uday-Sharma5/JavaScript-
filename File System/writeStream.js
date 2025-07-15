const fs=require('fs');
var writableStream=fs.createWriteStream("abcd.d",{"flags":"a","encoding":"utf-8"});
writableStream.write("Computer science\n");
writableStream.write("Programming Languages\n");
writableStream.write("C\C++\JavaScript");
writableStream.end();