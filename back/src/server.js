const http = require("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");

http
	.createServer((req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		const { url } = req;
		if (url.includes("onSearch")) {
			const id = Number(url.split("/").at(-1));
			getCharById(res, id);
		}
		if (url.includes("detail")) {
			const id = Number(url.split("/").at(-1));
			getCharDetail(res, id);
		}
	})
	.listen(3002, "localhost");
