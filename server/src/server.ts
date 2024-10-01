import express, { Request, Response } from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import http from 'http';  

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws: WebSocket) => {
  console.log('New client connected');

  ws.on('message', (message: string) => {
    console.log(`Received: ${message}`);
    
    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(JSON.stringify({ message: message.toString() }));
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('WebSocket server is running');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
