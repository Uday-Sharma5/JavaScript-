const net = require("net");

// Create a server
const server = net.createServer((socket) => {
  console.log("Client connected");

  // When client sends data
  socket.on("data", (data) => {
    console.log("Client says:", data.toString());
    socket.write("Hello from server 👋");
  });

  // When client disconnects
  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

// Listen on port 8080
server.listen(8080, () => {
  console.log("Server listening on port 8080...");
});
