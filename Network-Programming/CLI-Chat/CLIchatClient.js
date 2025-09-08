const net = require('net');
const readline = require('readline');

var iointerface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var clientSocket = new net.Socket();
clientSocket.connect(5001, "localhost", function() {
  console.log('Connected to server');

  clientSocket.on('data', function(data) {
    console.log('Server Says - ' + data);

    iointerface.question("Enter Login : ", function(ans) {
      if (ans.toUpperCase() == data) {
        iointerface.question("Enter Username : ", function(username) {
          iointerface.question("Enter Password : ", function(password) {
            var up = {
              "_username": username,
              "_password": password
            };
            var a=JSON.stringify(up);
	    clientSocket.write(a);
            iointerface.close();
          });
        });
      }
    });
  });
});
