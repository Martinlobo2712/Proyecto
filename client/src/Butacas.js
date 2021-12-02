import { useState, useEffect } from 'react';
import React from 'react';
import CssButacas from './Butacas.css';
import axios from 'axios';

const Butacas = props => {
  const {peliculaElegida, horarioElegido, fechaElegida, setButacasElegidas} = props;
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios.get('/peliculas')
    .then(res => {
      console.log(res.data);
      setPeliculas(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  const handleClick = e => {

  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('form enviado');

  }


  return(
    <div class="bg-dark">
    <br/>
      <h1 id="Select" class="bg-light">Seleccione las butacas para {peliculaElegida} a las {horarioElegido} en el dia {fechaElegida}</h1>
      <form onSubmit={handleSubmit}>
        {peliculas[peliculaElegida._id].butacas.map(butaca => (
          <div>
            <input type="button" value={butaca} onClick={handleClick} />
          </div>
        ))}
        <button type="submit">Comprar</button>
      </form>
      <br/>
    </div>
  )
}

export default Butacas;
