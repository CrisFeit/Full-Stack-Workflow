/* eslint-disable linebreak-style */
const express = require('express');
let routes = require('./routes/routes');
const path = require('path');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.static(path.join(__dirname,'public/assets')))
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
