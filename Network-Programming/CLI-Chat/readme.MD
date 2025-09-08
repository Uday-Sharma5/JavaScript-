# Network Programming

This folder contains simple **client-server applications** built using **Node.js** and the `net` module.  
It demonstrates how sockets work for sending and receiving data between a server and multiple clients.

## Contents
- **server.js** → A TCP server that listens for connections, sends login prompts, and verifies user credentials from a local file (`users.data`).  
- **client.js** → A TCP client that connects to the server, accepts input (login, username, password) from the terminal, and sends it to the server.  
- **users.data** → A JSON file that stores predefined users with their usernames and passwords.

## How it works
1. The server starts and listens on port `5001`.
2. When a client connects, the server asks for `LOGIN`.
3. The client sends credentials in JSON format:
   ```json
   {
     "_username": "uday",
     "_password": "uday"
   }
