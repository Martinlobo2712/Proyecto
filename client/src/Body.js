import {useState } from 'react';
import Inicio from './Inicio';
import Catalogo from './Catalogo';
import {Routes, Route} from "react-router-dom";
import Butacas from './Butacas';

const Body = () => {

  const [horarioElegido, setHorarioElegido] = useState('');
  const [peliculaElegida, setPeliculaElegida] = useState('');
  const [fechaElegida, setFechaElegida] = useState('');

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
       setFechaElegida={setFechaElegida}
       />}
     />
   </Routes>
  );
}

export default Body;
