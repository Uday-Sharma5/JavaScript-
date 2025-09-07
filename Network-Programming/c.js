const net=require('net');
var clientSocket=new net.Socket();
clientSocket.connect(8080,function(){
console.log("connected to server");
clientSocket.write("HI, I am your new Client");
});
clientSocket.on('data',function(data){
console.log('Server says : '+data);
});
clientSocket.on('end',function(){
console.log('Connection to server end');
})