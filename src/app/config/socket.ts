import type { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';
import { ServerToClientEvents } from '../../generated/types';

type ClientToServerEvents = ServerToClientEvents; // TEMP: For development only. Remove when no longer required.

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  'http://localhost:4000',
  {
    autoConnect: true,
    closeOnBeforeunload: true
  }
);

socket.on('connect_error', err => {
  console.error(`socket connect_error: ${err.message}`, err);
});

socket.on('connect', () => {
  console.log('socket connected');
});

socket.on('disconnect', () => {
  console.log('socket disconnected');
});

export default socket;
