/**
 * Creates a server running Socket.IO which mirrors all incoming messages.
 */
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const port = 4000;
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    // Allow Vite dev and preview ports to connect.
    // origin: ['http://localhost:5173', 'http://localhost:4173']
  }
});

io.on('error', error => console.error(error));

io.on('connection', socket => {
  console.log(`client connected`);

  // Echo message from client.
  socket.onAny((eventName, ...args) => {
    socket.emit(eventName, ...args);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

httpServer.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
