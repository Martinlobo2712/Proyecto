import React from 'react';

const Butacas = props => {
  const {peliculaElegida, horarioElegido} = props;

  return(
    <div>
      <h1>Butacas</h1>
      <p>{peliculaElegida}</p>
      <p>{horarioElegido}</p>

    </div>
  )
}

export default Butacas;
