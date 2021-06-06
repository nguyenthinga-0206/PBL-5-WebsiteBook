const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { NextApp } = require("@keystonejs/app-next");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const initialiseData = require("./initial-data");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
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
  },
};
require("dns").lookup(require("os").hostname(), function (err, add, fam) {
  console.log(add + ":" + process.env.PORT + "/admin");
});
