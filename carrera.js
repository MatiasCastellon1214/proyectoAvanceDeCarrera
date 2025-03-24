// Crear el contenido de la carrera
const carreraContent = `
  <div class="carrera-p">
    La carrera Certified Tech Developer es una colaboración innovadora entre Mercado Libre, Globant y Digital House. Este programa de formación integral está diseñado para proporcionar a los estudiantes una experiencia profunda en el mundo de la tecnología y el desarrollo de software.<br>Características principales:
    <ul class="carrera-lista">
      <li><strong>Contenido Integral:</strong> El programa abarca desde los fundamentos de la programación hasta tecnologías avanzadas y prácticas actuales en la industria.</li>
      <li><strong>Tracks de Especialización:</strong> Dividido en dos tracks: un programa principal de 21 meses y una especialización de 12 meses.</li>
      <li><strong>Enfoque Práctico:</strong> Se centra en proyectos y casos de estudio reales para asegurar una comprensión y aplicación efectiva.</li>
      <li><strong>Apoyo de Expertos:</strong> Acceso a recursos y mentores de la industria para obtener conocimientos del mercado laboral tecnológico.</li>
      <li><strong>Certificación Acreditada:</strong> Al completar el programa, se obtiene un certificado respaldado por Mercado Libre, Globant y Digital House.</li>
    </ul>
  </div>
`;

// Seleccionar el contenedor y asignarle el contenido dinámicamente
const carreraContainer = document.getElementById('carrera-content');
carreraContainer.innerHTML = carreraContent;

// Agregar funcionalidad para el botón de "Ver más / Ver menos"
document.getElementById('toggleCarrera').addEventListener('click', function () {
    carreraContainer.classList.toggle('show');
    this.textContent = carreraContainer.classList.contains('show') ? 'Ver menos' : 'Ver más';
});
