const { use } = require("chai");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var rooms = {};
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("người dùng đã kết nối", socket.id);
  rooms[socket.id] = { messages: [] };
  socket.emit(socket.id, {
    message:
      "chào mừng bạn đến với phòng chat của Tui!" + JSON.stringify(rooms),
  });
  socket.on("disconnect", () => {
    console.log("người dùng đã thoát");
  });
  socket.on(socket.id, (msg) => {
    rooms[socket.id].messages.push(msg);
    io.emit(socket.id, msg);
  });
});
const PORT = 8080;
server.listen(PORT, () => {
  require("dns").lookup(require("os").hostname(), function (err, add, fam) {
    console.log(`${add}:${PORT}`);
  });
});
