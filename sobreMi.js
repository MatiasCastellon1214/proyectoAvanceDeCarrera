// Contenido de la sección Sobre Mí
const sobreMiContent = `
  <div class="sobreMi-p d-flex flex-sm-column flex-md-row justify-content-sm-center justify-content-md-around justify-content-lg-around align-items-center mt-1">
    <!--<div class="profile-image me-3">
      <a href="https://www.linkedin.com/in/matías-castellón-54ab03252" target="_blank"><img src="img/perfil.jpg" alt="Imagen de perfil" class="img-fluid" style="max-width: 150px;"></a>
    </div>-->
    <div class="info">
      <p class="mt-3">Carrera de grado: <strong>Licenciado en Ciencias Biológicas</strong></p>
      <p>Trabajo actual: <strong>Becario doctoral CONICET</strong></p>
      <p>Estudiante:<strong> Certified Tech Developer.</strong></p>
      <!-- Enlaces a CV, trabajos publicados, etc. -->
      
    </div>
    <div class="icon-links d-flex flex-column gap-4">
        <a href="https://drive.google.com/file/d/1rs8IEJDRrcHnAg-WbP7ihO_9ntriWqs3/view?usp=drive_link" class="me-3" target="_blank"">
            <button class="btn w-100">
                <i class="fas fa-file-alt"> CV - Resumido</i>
            </button>
        </a>
        <a href="https://drive.google.com/file/d/1L39np5bGIBO4QxOxDtTyLAe2Lt_lkKZv/view?usp=drive_link" class="me-3" target="_blank">
            <button class="btn w-100">
                <i class="fa-regular fa-folder-open"> CV - Extendido</i>
            </button>
        </a>
    </div>
</div>
`;

// Seleccionar el contenedor donde se insertará el contenido de Sobre Mí
const sobreMiContainer = document.querySelector('#sobreMi-section .div-sobreMi');

// Insertar el contenido generado dentro del contenedor existente
sobreMiContainer.innerHTML = sobreMiContent;
