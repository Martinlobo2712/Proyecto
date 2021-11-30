import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Header = ({ title }) => {
  return(
    <nav>
      <h1>PapuPelis</h1>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/Catalogo"> Catalogo</Link>
     </div>
   </nav>
  )
}

export default Header;
