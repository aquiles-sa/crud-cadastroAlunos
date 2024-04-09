const express = require("express");
const routes = require("./routes");
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(routes);

server.listen(3000, () => {
  console.log(`Running on port 3000`);
});
