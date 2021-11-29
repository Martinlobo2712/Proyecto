const express = require('express');
const router = express.Router();
const Pelicula = require('../models/Pelicula');

router.get('/api/peliculas', (req, res) => {
  res.send('todas las pelis');
});

module.exports = router;
