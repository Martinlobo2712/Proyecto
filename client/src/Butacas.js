import React from 'react';

const Butacas = props => {
  const {peliculaElegida, horarioElegido, fechaElegida} = props;

  const handleClick = e => {

  }

  return(
    <div>
      <h1>Seleccione las butacas para {peliculaElegida} a las {horarioElegido} en el dia {fechaElegida}</h1>
      <form>
        <div>
          <input type="button" value="1" onClick={handleClick} />
        </div>
      </form>
    </div>
  )
}

export default Butacas;
