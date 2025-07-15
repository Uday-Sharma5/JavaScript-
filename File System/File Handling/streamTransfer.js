const fs=require('fs');
var readableStream=fs.createReadStream("abcd.d",{
"flags":"r",
"encoding":"utf-8"
});

var writableStream=fs.createWriteStream("pqr.d",{
"flags":"a",
"encoding":"utf-8"
});
readableStream.pipe(writableStream);