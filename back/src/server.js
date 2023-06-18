
const express = require("express");
const server = express();
const cors = require('cors')
const morgan = require("morgan");
const router = require("./routes/index");
require("dotenv").config();

const PORT = process.env.PGPORT || 3002;
server.use(cors())
server.use(morgan("dev"));
server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
	console.log("Server raised in port ", PORT);
});
