const pelis = ['1', 'Batman', 'Spiderman', 'otra peli'];

const Catalogo = () => {
  return (

    <div>
      {pelis.map(peli => <h2>{peli}</h2>)}
    </div>
  );
}

export default Catalogo;
