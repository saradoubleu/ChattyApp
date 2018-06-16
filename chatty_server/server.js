const express = require('express');
const uuid = require('uuid/v4');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;

const PORT = 3001;


const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

const wss = new SocketServer({ server });

wss.on('connection', function connection(ws) {
  console.log("Connected clients:", wss.clients.size);
  let counter = {
    counter: wss.clients.size,
    type: "usersOnline"
  }
  counter.id = uuid();

  counter = JSON.stringify(counter);
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(counter);
    }
  });

  ws.on('message', function incoming(data) {
    data = JSON.parse(data);
    switch (data.type) {
      case "displayMsg":
        data.type = "allMsg";
        break;
      case "displayNtf":
        data.type = "allNtf";
        break;
      default:
        throw new Error("Unknown message type:", data.type);
    }
    data.id = uuid();
    data = JSON.stringify(data);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
  ws.on('close', () => console.log('Client disconnected'));
});
