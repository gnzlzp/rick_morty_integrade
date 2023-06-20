const axios = require("axios");
const URL_BASE = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;

  if (id > 826 || id < 1) {
    return res.status(400).json({ error: "El ID del personaje no existe" });
  }

  axios
    .get(`${URL_BASE}${id}`)
    .then((personaje) => {
      const { id, name, species, image, gender } = personaje.data;
      res.status(200).json({ id, name, species, image, gender });
    })
    .catch((error) => {
      res.status(400).json({ error: "Error al obtener el personaje" });
    });
};

module.exports = getCharById;
