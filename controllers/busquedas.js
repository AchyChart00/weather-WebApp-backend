const { response } = require("express");
const Busqueda = require("../models/busqueda.model");

const getHistorial = (req, res = response) => {
  Busqueda.find()
    .then((busqueda) => res.json({busqueda}))
    .catch((err) => res.status(400).json("Error" + err));
};

const postHistorial = (req, res = response) => {
  const description = req.body.description;
  const name = req.body.name;
  const lat = req.body.lat;
  const lon = req.body.lon;
  const country = req.body.country;
  const image = req.body.image;
  const temp = req.body.temp;

  const newBusqueda = new Busqueda({
    description,
    name,
    lat,
    lon,
    country,
    image,
    temp,
  });

  newBusqueda
    .save()
    .then(() => res.json("Busqueda Added!"))
    .catch((err) => res.status(400).json("Error" + err));
};

module.exports = {
  postHistorial,
  getHistorial,
};
