// Crear el contenido de la carrera
const carreraContent = `
  <div class="carrera-p">
    La carrera Certified Tech Developer es una colaboración innovadora entre Mercado Libre, Globant y Digital House. Este programa de formación integral está diseñado para proporcionar a los estudiantes una experiencia profunda en el mundo de la tecnología y el desarrollo de software.<br>Características pincipales:
    <ul class="carrera-lista">
      <li><strong>Contenido Integral:</strong> El programa abarca una amplia gama de temas, desde los fundamentos de la programación hasta tecnologías avanzadas y prácticas actuales en la industria.</li>
      <li><strong>Tracks de Especialización:</strong> Dividido en dos tracks, el programa principal de 21 meses y una especialización de 12 meses, permite a los estudiantes explorar áreas específicas de interés y profundizar en campos especializados de la tecnología.</li>
      <li><strong>Enfoque Práctico:</strong> El enfoque de aprendizaje se centra en proyectos prácticos y casos de estudio reales para asegurar una comprensión sólida y una aplicación efectiva de los conocimientos adquiridos.</li>
      <li><strong>Apoyo de Expertos:</strong> Los estudiantes tenemos acceso a recursos y mentores de la industria, lo que proporciona una red invaluable para desarrollar habilidades y obtener conocimientos de primera mano sobre la dinámica del mercado laboral tecnológico.</li>
      <li><strong>Certificación Acreditada:</strong> Al completar el programa, los estudiantes recibiremos un certificado acreditado respaldado por Mercado Libre, Globant y Digital House, validando su formación y preparación para el campo laboral.</li>
    </ul>
    Esta carrera ofrece una combinación única de habilidades técnicas y conocimientos prácticos, preparando a los estudiantes para convertirse en profesionales altamente capacitados y exitosos en el ámbito de la tecnología y el desarrollo de software.
  </div>
`;

// Seleccionar el contenedor donde se insertará el contenido de la carrera
const carreraContainer = document.getElementById('carrera-section');

// Crear un elemento div para almacenar el contenido y asignar el HTML creado
const div = document.createElement('div');
div.classList.add("mt-1", "col-12", "col-sm-8", "col-md-10", "col-lg-10")
div.innerHTML += carreraContent;

// Insertar el contenido generado dentro del contenedor existente
carreraContainer.appendChild(div);
