
const PORT = 3002;
const express = require("express");
const server = express();
const cors = require('cors')
const morgan = require("morgan");
const router = require("./routes/index");

server.use(cors())
server.use(morgan("dev"));
server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
	console.log("Server raised in port ", PORT);
});
