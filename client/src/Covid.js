import React from 'react';
import CssCovid from './Covid.css';
const Covid = () => {
  return(
    <div class="bg-dark">
    <br/>
    <div class="TituCovid">
    <h1 id="h1Covid" class="bg-light">Información Sanitaria Covid-19</h1>
    </div>
    <div  class="accordion " id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Sintomas
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        La COVID-19 afecta de distintas maneras en función de cada persona. La mayoría de las personas que se contagian presentan síntomas de intensidad leve o moderada, y se recuperan sin necesidad de hospitalización.
        <br/>
        <p>Los síntomas más habituales son los siguientes:</p>
        <ul>
          <li>Fiebre</li>
          <li>Tos</li>
          <li>Cansancio</li>
          <li>Pérdida del gusto o del olfato</li>
        </ul>
        <p>Los síntomas menos habituales son los siguientes:</p>
        <ul>
        <li>Dolor de garganta</li>
        <li>Dolor de cabeza</li>
        <li>Molestias y dolores</li>
        <li>Diarrea</li>
        <li>Erupción cutánea o pérdida del color de los dedos de las manos o los pies</li>
        <li>Ojos rojos o irritados</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Prevencion
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Toma las precauciones adecuadas e infórmate bien para protegerte y cuidar de quienes te rodean. Sigue las recomendaciones de los organismos de salud pública de tu zona.
      <p>Para conocer las directrices que se aplican en tu región, solicita información a las autoridades sanitarias locales.</p>
      <p>Para evitar la propagación de la COVID‑19, sigue estas recomendaciones:</p>
      <ul>
        <li>Mantén una distancia de seguridad con otras personas (de 1 metro como mínimo), aunque no parezca que estén enfermas.</li>

        <li>Utiliza mascarilla en público, especialmente en interiores o cuando no sea posible mantener el distanciamiento físico.</li>
        <li>Prioriza los espacios abiertos y con buena ventilación en lugar de los espacios cerrados. Si estás en interiores, abre una ventana.</li>
        <li>Lávate las manos con frecuencia. Usa agua y jabón o un desinfectante de manos a base de alcohol.</li>
        <li>Vacúnate cuando sea tu turno. Sigue las directrices sobre vacunación de las autoridades locales.</li>
        <li>Cuando tosas o estornudes, cúbrete la nariz y la boca con el codo flexionado o con un pañuelo.</li>
        <li>Si no te encuentras bien, quédate en casa.</li>
      </ul>
      <p>En caso de que tengas fiebre, tos o dificultad para respirar, busca atención médica. Llama por teléfono antes de acudir a tu proveedor de servicios sanitarios para que te dirijan al centro médico adecuado. De esta forma, te protegerás a ti y evitarás la propagación de virus y otras infecciones.
      </p>
      <p>Mascarillas</p>
      <p>
      Las mascarillas bien colocadas pueden ayudar a prevenir que las personas que las llevan contagien el virus a otras. Sin embargo, no protegen frente a la COVID‑19 por sí solas, sino que deben combinarse con el distanciamiento físico y la higiene de manos. Sigue las recomendaciones de las autoridades sanitarias locales.
      </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Tratamientos
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <h3>Cuidado Personal</h3>
      <p>Si has estado en contacto con alguien que tenga la COVID-19, sigue estos pasos:</p>
      <ul>
      <li>Llama por teléfono a tu proveedor de servicios sanitarios o a una línea de atención sobre la COVID-19 para que te indiquen dónde y cuándo puedes hacerte una prueba.</li>
      <li>Coopera en los procedimientos de rastreo para frenar la propagación del virus.</li>
      <li>En caso de que no sea posible hacerte una prueba, quédate en casa y aíslate durante 14 días.</li>
      <li>Durante el periodo de cuarentena, no vayas al trabajo, a clase ni a lugares públicos. Si necesitas algo de fuera, pide a alguien que te lo lleve. </li>
      <li>Mantén una distancia de al menos 1 metro con otras personas, incluidos tus familiares.</li>
      <li>Usa la mascarilla para no contagiar a los demás. También debes llevarla puesta si necesitas acudir a un centro médico.</li>
      <li>Lávate las manos con frecuencia.</li>
      <li>Quédate en una habitación aislada del resto de los miembros de tu familia y, si no es posible, lleva puesta la mascarilla.</li>
      <li>Mantén la estancia bien ventilada.</li>
      <li>Si compartes el dormitorio con otras personas, debe haber una separación de al menos 1 metro entre las camas.</li>
      <li>Controla tus síntomas durante 14 días.</li>
      <li>Llama por teléfono a tu proveedor de servicios sanitarios de inmediato si tienes algún síntoma peligroso, como dificultad para respirar, pérdida de movilidad o del habla, confusión o dolor en el pecho.</li>
      <li>Mantén una actitud positiva. Para ello, puedes comunicarte con los tuyos por teléfono o por Internet, o hacer ejercicio en casa.</li>
      </ul>
      <h3>Tratamientos Medicos</h3>
      <p>Científicos de todo el mundo están trabajando en la búsqueda y el desarrollo de tratamientos para combatir la COVID-19.</p>
      <ul>
      <li>Para proporcionar unos cuidados óptimos, se necesita oxígeno para los pacientes que se encuentran más graves y aquellos que corren el riesgo de desarrollar una enfermedad severa. En el caso de los pacientes críticos, se requieren métodos de asistencia respiratoria más avanzados, como respiradores.</li>
      <li>La dexametasona es un corticoide que contribuye a reducir el tiempo que los pacientes están conectados a un respirador y que puede salvar la vida de los que se encuentran en estado grave y crítico.</li>
      </ul>
      <p>La Organización Mundial de la Salud desaconseja la automedicación de cualquier tipo, incluido el uso de antibióticos, para prevenir o curar la COVID-19.</p>
      </div>
    </div>
  </div>
</div>
<div class="TituDentroCine">
<h2 class="bg-light" id="h2Covid">Protocolo dentro del Cine</h2>
<br/>
<br/>
<div id="protocolo" class="bg-light" >
<h3 class="bg-light" >Si el grupo familiar es mayor se puede hacer en varias operaciones y se juntan las burbujas (max 6 personas).
Higiene de manos.
</h3>
<h5>
<ul>
  <li>Higiene de manos.</li>
  <li>El uso del tapabocas es obligatorio en todo momento.</li>
  <li>Solo consumir en la sala, luego volver a usar el tapabocas.</li>
  <li>Programación espaciada para desinfección de las salas.</li>
  <li>Distanciamiento en CANDY y BOLETERÍA.</li>
  <li>Solicitamos se acerque solo 1 miembro del grupo.</li>
  <li>Todo nuestro personal se encuentra protegido con tapabocas.</li>
  <li>Salida organizada.</li>
</ul>
</h5>
</div>
</div>

<br/>
</div>
  )
}

export default Covid;
