import imagenes from './imagenes.js';
import CssInicio from './Inicio.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const Inicio = () => {
  return (
      <div class="bg-dark">
      <br/>
      <div id="COVID"class="alert alert-light" role="alert">
      <svg id="exclamation" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg>
    COVID-19 - <Link aria-current="page" to="/Covid">Haga click aquí</Link> aquí para conocer las últimas actualizaciones sobre nuestros protocolos. Gracias por su paciencia y apoyo.
  </div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={imagenes.imgSpace1} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={imagenes.imgAvengers1} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={imagenes.imgVenom1} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <br/>
      </div>
  );
}

export default Inicio;
