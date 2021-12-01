import imagenes from './imagenes.js';

const Inicio = () => {
  return (
      <div class="bg-dark">
      <h1>Bienvenido a PapuPelis</h1>
        <div class="cards">
          <div class="banners">
            <img src={imagenes.imgVenom1}  alt="no sirve"></img>
          </div>
        </div>

      </div>
  );
}

export default Inicio;
