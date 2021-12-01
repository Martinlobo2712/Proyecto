import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Header = ({ title }) => {
  return(
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">PapuPelis</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
           <li class="nav-item">
             <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
           </li>
           <li class="nav-item">
             <Link class="nav-link active" aria-current="page" to="/Catalogo">Catalogo</Link>
           </li>
        </ul>
        </div>
        </div>
      </nav>

    </div>

  )
}

export default Header;
