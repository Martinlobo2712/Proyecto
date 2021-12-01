const express = require('express');
const router = express.Router();
const Pelicula = require('../models/Pelicula');

router.get('/peliculas', (req, res) => {
  Pelicula.find((err, peliculas) => {
    res.json(peliculas);
  });
});

module.exports = router;
