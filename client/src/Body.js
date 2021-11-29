import Inicio from './Inicio';
import Catalogo from './Catalogo';
import {Routes, Route} from "react-router-dom";

const Body = () => {
  return (
    <Routes>
     <Route path="/" element={<Inicio />} />
     <Route path="/Catalogo" element={<Catalogo />} />
   </Routes>
  );
}

export default Body;
