import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useNavigate} from "react-router-dom";

const Pelicula = props => {
  const [hidden, setHidden] = useState(true);
  const { name, id, horarios, dia, setPeliculaElegida, setHorarioElegido, setFechaElegida } = props;

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('form enviado');
    setPeliculaElegida(e.target.children[0].children[0].value);
    console.log(e.target.children[0].children[0].select.value);
    navigate('/butacas');
  }

  const handleChange = e => {
    console.log(e.target.value);
    setHorarioElegido(e.target.value);
  };

  return (
    <div>
      <h1 className="">{name}</h1>
      <button onClick={() => setHidden(false)}> Ver </button>
      <div id={id} hidden={hidden}>
        <form onSubmit={handleSubmit}>
          {horarios.map(item => (
            <div>
              <input
                name="peli"
                hidden
                type="text"
                value={name}
              />
              <label>{item}</label>
              <input
                value={item}
                type="radio"
                name="horarios"
                onChange={handleChange}
              />
            </div>
          ))}
          <select>
            {dia.map(item => (
                <option value={item}>{item}</option>
            ))}
          </select>
          <button type="submit" > Comprar </button>
        </form>
      </div>
    </div>
  );
};

export default Pelicula;
