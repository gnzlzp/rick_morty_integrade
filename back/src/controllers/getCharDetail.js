const axios = require("axios");

const getCharDetail = (res, id) => {
	axios
		.get(`https://rickandmortyapi.com/api/character/${id}`)
		.then((data) => {
			const { id, name, gender, image, origin, status, species } = data.data;
			res.writeHead(200, "Content-type:application/json");
			res.end(
				JSON.stringify({ id, name, gender, image, origin, status, species })
			);
		})
		.catch((reason) => {
			res.writeHead(500, "Content-type:text/plain");
			res.end("No se encuentra la url solicitada");
		});
};

module.exports = getCharDetail;
