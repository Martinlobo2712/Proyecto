import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import axios from 'axios';
import Pelicula from './Pelicula';

const Catalogo = props  => {
  const [peliculas, setPeliculas] = useState([]);

  const { setPeliculaElegida, setHorarioElegido, setFechaElegida } = props;

  useEffect(() => {
    axios.get('/peliculas')
      .then(res => {
        setPeliculas(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
    {peliculas.map(pelicula => (
      <Pelicula
        id={pelicula.id}
        key={pelicula.id}
        name={pelicula.name}
        horarios={pelicula.horarios}
        dia={pelicula.dias}
        setPeliculaElegida={setPeliculaElegida}
        setHorarioElegido={setHorarioElegido}
        setFechaElegida={setFechaElegida}
      />
    ))}
    </div>
  );
}

export default Catalogo;
