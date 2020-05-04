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
let content = com.readData();

io.on("connection", (socket) => {
    io.emit(UPDATE, content);
    socket.on(UPDATE, (data) => {
        content = data;
        io.emit(UPDATE, data);
    });
});

server.listen(port, () => {
    console.log(`listening port ${port}`);
});