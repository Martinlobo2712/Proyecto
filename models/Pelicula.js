const mongoose = require('mongoose');

const PeliculaSchema = new mongoose.Schema({
  id: Number,
  name: String,
  horarios: [String],
  dias: [String]
});

const Pelicula = mongoose.model('Pelicula', PeliculaSchema);

module.exports = Pelicula;
