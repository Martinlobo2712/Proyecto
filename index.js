const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./routes/pelicula');

const port = process.env.PORT        || 4000;
const db   = process.env.MONGODB_URI || 'mongodb://localhost/proyecto';

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.use('/pelicula', router);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
.catch(err => console.error(`Connection error ${err}`));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
