import { useState, useEffect } from 'react';
import axios from 'axios';
import Pelicula from './Pelicula';
import Css from './catalogo.css'

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
    <div class="bg-dark">
    <div id="catalogo">
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
    </div>
  );
}

export default Catalogo;
