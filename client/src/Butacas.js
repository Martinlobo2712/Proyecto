import React from 'react';
import CssButacas from './Butacas.css';

const Butacas = props => {
  const {peliculaElegida, horarioElegido, fechaElegida} = props;

  const handleClick = e => {

  }

  return(
    <div class="bg-dark">
    <br/>
      <h1 id="Select" class="bg-light">Seleccione las butacas para {peliculaElegida} a las {horarioElegido} en el dia {fechaElegida}</h1>
      <form>
        <div>
          <input type="button" value="1" onClick={handleClick} />
        </div>
      </form>
      <br/>
    </div>
  )
}

export default Butacas;
