const express = require("express");
const server = express();
const cors = require('cors')
const morgan = require("morgan");
const router = require("./routes/index");
require("dotenv").config();

const PORT = process.env.PGPORT || 3002;

server.use(cors({
  origin: 'https://rick-morty-integrade.vercel.app',
  optionsSuccessStatus: 200
}));
server.use(morgan("dev"));
server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised on port ", PORT);
});
