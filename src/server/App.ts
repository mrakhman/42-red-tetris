import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import socketio from 'socket.io';
import moment from 'moment';
import dotenv from 'dotenv';

import { User } from './models/User';
import { Room } from './models/Room';

dotenv.config();

const PORT = process.env.PORT_SERVER;

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
  pingTimeout: 6000,
});

app.set('io', io); // anywhere in routes we should be able to get socket with `let io = app.get("io");`

const botName = 'Red Tetris';

const formatMessage = (username: string, text: string): Message => {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
};

// Run when client connects
io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, roomName }: { username: string, roomName: string }) => {
    const user = new User({ id: socket.id, username, room: roomName });

    // Initialize room instance if room exists or create if it doesn't exist
    let room = Room.getByName(roomName);
    if (!room)
      room = new Room(roomName);

    // Add user to current room
    room.addUser(user);

    socket.join(room.name);
    console.log(`Socket ${socket.id} joined ${room.name}`);

    // Welcome current user
    socket.emit('message', formatMessage(botName, `Hi ${user.username}! Welcome to Room ${room.name}!`));

    // Broadcast when a user connects
    socket.broadcast
      .to(room.name)
      .emit(
        'message',
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info when new user joins
    io.to(room.name).emit('update room users', {
      room: room.name,
      users: room.users,
    });
  });

  // Listen for chatMessage
  socket.on('chatMessage', ({ username, message, room }: { username: string, message: string, room: string }) => {
    io.to(room).emit('message', formatMessage(username, message));
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = User.getById(socket.id);
    if (!user) throw Error('User not found'); // TODO: handle error
    const room = Room.getByName(user.room);
    if (!room) throw Error('Room not found');  // TODO: handle error

    user.leave();
    room.removeUser(user.id);
    io.to(room.name).emit(
      'message',
      formatMessage(botName, `${user.username} has left the game`),
    );
    // Send users and room info when user leaves
    io.to(room.name).emit('update room users', {
      room: room.name,
      users: room.users,
    });
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
