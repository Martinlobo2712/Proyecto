const mongoose = require('mongoose');
const Pelicula = require('./models/Pelicula');

const db = 'mongodb+srv://MartinLobo:proyecto@cluster0.g2wam.mongodb.net/Proyecto?retryWrites=true&w=majority';

const pelicula = [
  {
    id: 1,
    name: 'Batman',
    horarios: ['20:00', '21:30', '23:00'],
    dias: ['1/12/2021', '2/12/2021', '3/12/2021']
  },
  {
    id: 2,
    name: 'Superman',
    horarios: ['20:30', '22:00', '23:30'],
    dias: ['1/12/2021', '2/12/2021', '3/12/2021']
  },
  {
    id: 3,
    name: 'Spiderman',
    horarios: ['21:30', '22:30', '24:00'],
    dias: ['1/12/2021', '2/12/2021', '3/12/2021']
  },
];

// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    Pelicula.insertMany(pelicula, (err, pelicula) => {
      if (err) throw err;
      console.log(`${pelicula.length} documents inserted!`);
      mongoose.connection.close();
    });
  })
  .catch(err => console.error(`Connection error ${err}`));
