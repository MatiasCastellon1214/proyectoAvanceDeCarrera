// Contenido de la sección Sobre Mí
const sobreMiContent = `
  <div class="sobreMi-p d-flex flex-sm-column flex-md-row justify-content-sm-center justify-content-md-around justify-content-lg-around align-items-center mt-1">
    <div class="info">
      <p>Carrera de Tecnicatura: <strong>Certified Tech Developer</strong></p>
      <p class="mt-3">Carrera de grado: <strong>Licenciado en Ciencias Biológicas</strong></p>
      <p>Trabajo actual: <strong>Becario Doctoral en CONICET</strong></p>      
      <p>Estudio actual: <strong>Analista Programador Universitario</strong></p>
    </div>
    <div class="icon-links d-flex flex-column gap-4">
        <a href="https://drive.google.com/file/d/188xNS5678Ngryj0DAWKH4G72aoIS9xgQ/view?usp=sharing" target="_blank">
            <button class="btn w-100">
                <i class="fas fa-file-alt me-2"></i>CV Resumido
            </button>
        </a>
        <a href="https://drive.google.com/file/d/1JG_3jwZX_CUPY-2t1iZqfri_wzgkkunV/view?usp=sharing" target="_blank">
            <button class="btn w-100">
                <i class="fas fa-file-alt me-2"></i>Summary (EN)
            </button>
        </a>
        <a href="https://drive.google.com/file/d/1L39np5bGIBO4QxOxDtTyLAe2Lt_lkKZv/view?usp=drive_link" target="_blank">
            <button class="btn w-100">
                <i class="fa-regular fa-folder-open me-2"></i>Portfolio Completo
            </button>
        </a>
    </div>
</div>

<div class="section mt-4 sobreMi-p">
    <h2><i class="fas fa-laptop-code me-2"></i>Habilidades Técnicas</h2>
    <div class="row">
        <!-- Columna 1 - Backend -->
        <div class="col-12 col-md-6 mb-3">
            <div class="skill-card p-3 rounded ctd">
                <h5 class="backend"><i class="fas fa-server me-2"></i>Backend</h5>
                <ul class="list-unstyled">
                    <li><i class="fas fa-check-circle text-success me-2"></i><strong>Java + Spring Boot (APIs REST)</strong></li>
                    <li><i class="fas fa-check-circle text-success me-2"></i><strong>Python + FastAPI</strong></li>
                    <li><i class="fas fa-check-circle text-success me-2"></i><strong>Autenticación JWT/OAuth2</strong></li>
                </ul>
            </div>
        </div>
        
        <!-- Columna 2 - Data & Cloud -->
        <div class="col-12 col-md-6 mb-3">
            <div class="skill-card p-3 rounded ctd">
                <h5 class="backend"><i class="fas fa-database me-2"></i>Data & Cloud</h5>
                <ul class="list-unstyled">
                    <li><i class="fas fa-check-circle text-success me-2"></i><strong>MySQL + PostgreSQL + MongoDB</strong></li>
                    <li><i class="fas fa-check-circle text-success me-2"></i><strong>Docker + Terraform</strong></li>
                    <li><i class="fas fa-check-circle text-success me-2"></i><strong>AWS (EC2, S3, VPC, IAM)</strong></li>
                </ul>
            </div>
        </div>
    </div>
</div>


</div>
`;

// Seleccionar el contenedor donde se insertará el contenido de Sobre Mí
const sobreMiContainer = document.querySelector('#sobreMi-section .div-sobreMi');

// Insertar el contenido generado dentro del contenedor existente
sobreMiContainer.innerHTML = sobreMiContent;
