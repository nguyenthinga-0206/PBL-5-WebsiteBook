const { Keystone } = require("@itoa/keystone");
const { PasswordAuthStrategy } = require("@itoa/auth-password");
const { NextApp } = require("@itoa/app-next");
const { GraphQLApp } = require("@itoa/app-graphql");
const { AdminUIApp } = require("@itoa/app-admin-ui");
const initialiseData = require("./initial-data");
const { MongooseAdapter: Adapter } = require("@itoa/adapter-mongoose");
const express = require("express");
const path = require("path");
const PROJECT_NAME = "first-app";
const adapterConfig = {
  mongoUri: "mongodb://cnw:concobebe123@db.itoa.vn:27017/cnw",
};
const UserSchema = require("./models/Users");
const BaivietSchema = require("./models/Baiviet");
const ChitietdonhangSchema = require("./models/Chitietdonhang");
const DonhangSchema = require("./models/Donhang");
const GiohangSchema = require("./models/Giohang");
const ImgSchema = require("./models/Img");
const NhacungcapSchema = require("./models/Nhacungcap");
const PhanloaisachSchema = require("./models/Phanloaisach");
const PhieunhapsachSchema = require("./models/Phieunhapsach");
const SachSchema = require("./models/Sach");

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
  secureCookies: process.env.NODE_ENV === "production",
  cookieSecret: "conco",
  cookie: {
    //https://www.keystonejs.com/keystonejs/keystone/#createauthstrategyconfig
    secure: process.env.NODE_ENV === "production", // Default to true in production
    maxAge: 1000 * 60 * 60 * 24 * 15, // 15 days
    sameSite: false,
  },
});

keystone.createList("User", UserSchema);
keystone.createList("Baiviet", BaivietSchema);
keystone.createList("Chitietdonhang", ChitietdonhangSchema);
keystone.createList("Donhang", DonhangSchema);
keystone.createList("Giohang", GiohangSchema);
keystone.createList("IMG", ImgSchema);
keystone.createList("Nhacungcap", NhacungcapSchema);
keystone.createList("Phanloaisach", PhanloaisachSchema);
keystone.createList("Sach", SachSchema);
keystone.createList("Phieunhapsach", PhieunhapsachSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  config: { protectIdentities: process.env.NODE_ENV === "production" },
});
/**
 *
 */
var cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: false,
      authStrategy,
    }),
    ...(process.env.UI === "true" ? [new NextApp({ dir: "giaodien" })] : []),
  ],
  configureExpress: (app) => {
    app.use(express.static(path.join(path.resolve(), "file")));
    app.use(cors());
    app.get("/rooms", (req, res) => {
      const ids = [];
      for (var id in rooms) {
        ids.push(id);
      }
      res.json({ rooms: ids });
    });
    app.get("/rooms/:id", (req, res) => {
      const { id } = req.params;
      if (id || id === "undefined") {
        if (!rooms[id]) rooms[id] = [{ text: "hi" }];
        res.json({ id, room: rooms[id] });
      } else res.status(400).json({ error: "in valid id" });
    });
    //
    const server = http.createServer(app);
    const io = new Server(server, {
      cors: { credentials: true },
    });
    var rooms = {};
    io.on("connection", (socket) => {
      const {
        id,
        handshake: {
          query: { room },
          headers: { referer },
        },
      } = socket;
      if (!room || room === "undefined") return;
      if (!rooms[room]) rooms[room] = [{ text: "hi" }];
      socket.join(room);
      socket.on(room, (message) => {
        rooms[room].push(message);
        io.emit(room, message);
      });
    });
    server.listen(3030, () => {
      console.log("listening socket server on PORT 3030");
    });
  },
};
require("dns").lookup(require("os").hostname(), function (err, add, fam) {
  console.log(add + ":" + process.env.PORT + "/admin");
});
