const mongoose = require('mongoose');

const PeliculaSchema = new mongoose.Schema({
  id: Number,
  name: String,
  horarios: [String],
  dias: [String],
  butacas: [Number]
});

const Pelicula = mongoose.model('pelicula', PeliculaSchema);

module.exports = Pelicula;
