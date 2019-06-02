const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const com = require("./communication");
const events = require("./events");

const port = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const {UPDATE} = events;

io.on("connection", (socket) => {
    const content = com.readData();
    io.emit(UPDATE, content);
    socket.on(UPDATE, (data) => {
        com.writeData(data);
        io.emit(UPDATE, data);
    });
});

server.listen(port, () => {
    console.log(`listening port ${port}`);
});