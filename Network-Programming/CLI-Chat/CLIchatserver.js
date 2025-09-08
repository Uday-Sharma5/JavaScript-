const net=require('net');
const fs=require('fs');
var server=net.createServer(function(socket){
var userJSONString=fs.readFileSync("users.data","utf-8");
var users=JSON.parse(userJSONString).users;
console.log(users[0].username)
socket.write('LOGIN');

socket.on('data',function(data){
var user=JSON.parse(data.toString());
if(user._username==users[0].username)
{
console.log("USERNAME IS TRUE")
if(user._password==users[0].password) console.log("PASSWORD IS TRUE");

else console.log("FALSE");
}

})

});
server.listen(5001,function(){
console.log("Server is ready...");
})