const net = require("net");

// Create a connection to the server
const client = net.createConnection({ port: 8080 }, () => {
  console.log("Connected to server!");

  // Send a message to the server
  client.write("Hello Server, I am the client 👋");
});

// Listen for messages from the server
client.on("data", (data) => {
  console.log("Server says:", data.toString());
});

// Detect when the server closes the connection
client.on("end", () => {
  console.log("Disconnected from server");
});
