const Turn = require("node-turn");
//TURN listener port for UDP (Default: 3478).
const server = new Turn({
  authMech: "long-term",
  credentials: {
    ihuser: "keepitsecrect",
  },
});
server.start();
