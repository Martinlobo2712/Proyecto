import Inicio from './Inicio';
import Catalogo from './Catalogo';
import {Routes, Route} from "react-router-dom";
import Butacas from './Butacas';
import Pelicula from './Pelicula';
import Covid from './Covid';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Body = () => {
  const [horarioElegido, setHorarioElegido] = useState('');
  const [peliculaElegida, setPeliculaElegida] = useState('');
  const [fechaElegida, setFechaElegida] = useState('');
  const [butacasElegidas, setButacasElegidas] = useState('');


  return (
    <Routes>
     <Route path="/" element={<Inicio />} />
     <Route
     path="/Catalogo"
     element={<Catalogo
       setHorarioElegido={setHorarioElegido}
       setPeliculaElegida={setPeliculaElegida}
       setFechaElegida={setFechaElegida}
       />}
     />
     <Route
     path="/Butacas"
     element={<Butacas
       horarioElegido={horarioElegido}
       peliculaElegida={peliculaElegida}
       fechaElegida={fechaElegida}
       butacasElegidas={butacasElegidas}
       />}
     />
     <Route path="/Covid" element={<Covid />} />
   </Routes>
  );
}

export default Body;
