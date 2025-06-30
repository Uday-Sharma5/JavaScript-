const readline= require("readline");
const linereader=readline.createInterface({
input:process.stdin,
output:process.stdout
});
linereader.question("Enter you name : ",function(line){
console.log(line);
linereader.close();
});
console.log("hello world"); 

//output:- Enter you name : hello world
//function(line){}  -- because this functions functionlity runs asyncronouslly.  