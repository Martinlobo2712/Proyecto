import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Catalogo = () => {
const handleClick = e => {
  document.getElementById("asd").hidden = false;
}

  return (
    <div>
      <h1 className="">Peli 1</h1>
      <button onClick={handleClick}> Comprar </button>
      <div id="asd" hidden>
          <form method="post">
          <label>20:00</label>
          <input type="radio" name="horario"></input>
          <label>21:30</label>
          <input type="radio" name="horario"></input>
          <button type="submit"> Comprar </button>
        </form>
      </div>
      <h1>Peli 2</h1>
      <h1>Peli 3</h1>
      <h1>Peli 4</h1>
    </div>
  );
}

export default Catalogo;
