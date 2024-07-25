const navbarContent = `
    <div class="container-fluid">
        <a class="navbar-brand d-none d-sm-block" href="https://www.linkedin.com/in/matías-castellón-54ab03252" target="_blank">MJC - CTD</a>
            <span class="navbar-text d-sm-none">MJC - CTD</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#" id="carrera">Carrera</a>
                </li>
                <!--<li class="nav-item">
                    <a class="nav-link" href="#" id="sobre-mi">Sobre mí</a>
                </li>-->
                <li class="nav-item">
                    <a class="nav-link" href="#" id="contacto">Contacto</a>
                </li>
            </ul>
        </div>
    </div>

`;

const navbarContainer = document.querySelector('.navbar');
navbarContainer.innerHTML = navbarContent;

// Obtener referencia al enlace de Carrera
const carreraLink = document.getElementById('carrera');

// Manejar el clic en el enlace de Carrera
carreraLink.addEventListener('click', function(event) {
  // Prevenir el comportamiento predeterminado del enlace
  event.preventDefault();

  // Obtener la posición vertical de la sección de Carrera
  const carreraSection = document.getElementById('carrera-section');
  const offsetTop = carreraSection.offsetTop;

  // Desplazamiento suave a la sección de Carrera
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
});
/*
const sobreMiLink = document.getElementById('sobre-mi');

sobreMiLink.addEventListener('click', function(event){
  event.preventDefault();

  const sobreMiSection = document.getElementById('sobreMi-section');
  const offsetTop = sobreMiSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
});
*/
const footerLink = document.getElementById('contacto');

footerLink.addEventListener('click', function(event){
  event.preventDefault();

  const footerSection = document.getElementById('footer-section');
  const offsetTop = footerSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
});

