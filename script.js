
let listado = [];
let listadoTalleres = [];


const materiasContainer = document.getElementById("materias-container");
const talleresContainer = document.getElementById("talleres-container");

fetch("json/listadoMaterias.json")
  .then((response) => response.json())
  .then((data) => {
    const listado = data;
  
    listado.forEach(function (materia) {
      const card = document.createElement("div");

      card.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");
      card.innerHTML += `
        <article class="caja">
          <img src="${materia.imgUrl}" alt="${materia.nombre}">
          <h3 class="nombre">${materia.nombre}</h3>
          <p class="bimestre"> ${materia.bimestre}</p>
          ${materia.url ? `<div><a href="${materia.url}" target="_blank" class="text-muted"><i class="fa-solid fa-link"></i></a> <a href="https://github.com/RentStudioDH" target="_blank" class="text-muted"><i class="fa-brands fa-github"></i></a></div>` : ""}
          
        </article>
      
      `;

      card.addEventListener("click", () => {
        openModal(
          materia.nombre,
          materia.bimestre,
          materia.descripcion,
          materia.githubLink,
          materia.modulos,
          materia.palabrasClave
        );
      });

      materiasContainer.appendChild(card);
    });

    // Asociar evento clic a cada tarjeta de materia
    const materiasCards = document.querySelectorAll("#materias-container .caja");
    materiasCards.forEach((card, index) => {
      card.addEventListener("click", () => {
        openModal(
          listado[index].nombre,
          listado[index].bimestre,
          listado[index].descripcion,
          listado[index].githubLink,
          listado[index].modulos,
          
        );
      });
    });


  });

fetch("json/listadoTalleres.json")
  .then((response) => response.json())
  .then((data) => {
    const listado = data;

    listado.forEach(function (taller) {
      const card = document.createElement("div");

      card.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");
      card.innerHTML += `
        <article class="caja">
          <img src="${taller.imgUrl}" alt="${taller.nombre}">
          <h3 class="nombre">${taller.nombre}</h3>
          <p class="bimestre">${taller.bimestre}</p>
        </article>
      `;

      card.addEventListener("click", () => {
        openModal(
          taller.nombre,
          taller.bimestre,
          taller.descripcion,
          taller.githubLink,
          taller.modulos,
          taller.palabrasClave
        );
      });

      talleresContainer.appendChild(card);
    });
    // Asociar evento clic a cada tarjeta de taller
    const talleresCards = document.querySelectorAll("#talleres-container .caja");
    talleresCards.forEach((card, index) => {
      card.addEventListener("click", () => {
        openModal(
          listadoTalleres[index].nombre,
          listadoTalleres[index].bimestre,
          listadoTalleres[index].descripcion,
          listadoTalleres[index].githubLink,
          listadoTalleres[index].modulos,
          listadoTalleres[index].palabrasClave
        );
      });
    });
  });

function openModal(nombre, bimestre, descripcion, githubLink, modulos, palabrasClave) {
  const modal = document.getElementById("myModal");
  const modalTitle = document.getElementById("modal-title");
  //const modalDescription = document.getElementById("modal-description");
  const modalLinks = document.getElementById("modal-links");
  const modalModules = document.getElementById("modal-modules");
  const modalKeywords = document.getElementById("modal-keywords");

  modal.style.display = "block";
  modalTitle.textContent = nombre;


  // Mostrar los módulos

  if (modulos) {
    let modulesHTML = '<h3 class="plan-estudios">Plan de estudios:</h3>';
    Object.keys(modulos).forEach((key, index) => {
      modulesHTML += `<div class="d-flex flex-wrap">
      <p id="modulo-title"><strong>Módulo ${index + 1}:</strong> ${
        modulos[key]
      }</p>
      </div>`;
    });
    modalModules.innerHTML = modulesHTML;
  } else {
    modalModules.innerHTML = "";
  }


  if (palabrasClave) {
    let keywordsHTML = '<div class="keyword-container d-flex flex-column flex-md-row align-items-start"><h3 class="palabras-clave">Keywords:</h3>';
    Object.keys(palabrasClave).forEach((key, index) => {
      //keywordsHTML += `<span class="keyword">${palabrasClave[key]}</span>`;
      keywordsHTML += `<span id="keyword-title"><strong> - </strong>${
        palabrasClave[key]
      }</span>`;
    });
    keywordsHTML += '</div>'
  
    modalKeywords.innerHTML = keywordsHTML;
  } else {
    modalKeywords.innerHTML = "";
  }


  

  // Cerrar el modal al hacer clic en la 'x'
  const closeModal = document.querySelector(".close");
  closeModal.addEventListener("click", () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  });

  // Cerrar el modal al hacer clic fuera de él
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}














// Función para inicializar los carruseles
function initCarousels() {
  if (window.innerWidth < 575) {
    // Solo inicializar si no están ya inicializados
    if (!$('.materias-carousel').hasClass('slick-initialized')) {
      $('.materias-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
      });
    }
    
    if (!$('.talleres-carousel').hasClass('slick-initialized')) {
      $('.talleres-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
      });
    }
  } else {
    // Destruir carruseles si existen
    if ($('.materias-carousel').hasClass('slick-initialized')) {
      $('.materias-carousel').slick('unslick');
    }
    if ($('.talleres-carousel').hasClass('slick-initialized')) {
      $('.talleres-carousel').slick('unslick');
    }
  }
}

// Cargar jQuery y Slick si no están disponibles
function loadDependencies() {
  return new Promise((resolve) => {
    if (typeof jQuery == 'undefined') {
      const script = document.createElement('script');
      script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
      script.onload = function() {
        const slickScript = document.createElement('script');
        slickScript.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js";
        slickScript.onload = resolve;
        document.head.appendChild(slickScript);
      };
      document.head.appendChild(script);
    } else if (typeof $.fn.slick == 'undefined') {
      const slickScript = document.createElement('script');
      slickScript.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js";
      slickScript.onload = resolve;
      document.head.appendChild(slickScript);
    } else {
      resolve();
    }
  });
}

// Modificar tus fetch para crear ambos tipos de vistas
function setupCards() {
  fetch("json/listadoMaterias.json")
    .then((response) => response.json())
    .then((data) => {
      const materiasContainer = document.getElementById("materias-container");
      const materiasCarousel = document.createElement('div');
      materiasCarousel.className = 'materias-carousel';
      materiasContainer.parentNode.insertBefore(materiasCarousel, materiasContainer.nextSibling);
      
      data.forEach(function (materia) {
        // Función para abrir modal (la reutilizamos)
        const openModalForCard = () => {
          openModal(
            materia.nombre,
            materia.bimestre,
            materia.descripcion,
            materia.githubLink,
            materia.modulos,
            materia.palabrasClave
          );
        };
        
        // Card para grid (original)
        const gridCard = document.createElement("div");
        gridCard.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");
        gridCard.innerHTML = `
          <article class="caja">
            <img src="${materia.imgUrl}" alt="${materia.nombre}">
            <h3 class="nombre">${materia.nombre}</h3>
            <p class="bimestre"> ${materia.bimestre}</p>
            ${materia.url ? `<div><a href="${materia.url}" target="_blank" class="text-muted"><i class="fa-solid fa-link"></i></a> <a href="https://github.com/RentStudioDH" target="_blank" class="text-muted"><i class="fa-brands fa-github"></i></a></div>` : ''}
          </article>
        `;
        gridCard.addEventListener("click", openModalForCard);
        materiasContainer.appendChild(gridCard);
        
        // Card para carrusel
        const carouselCard = document.createElement("div");
        carouselCard.classList.add("px-2", "carrusel-card"); // Añadimos clase adicional
        carouselCard.innerHTML = `
          <article class="caja">
            <img src="${materia.imgUrl}" alt="${materia.nombre}">
            <h3 class="nombre">${materia.nombre}</h3>
            <p class="bimestre"> ${materia.bimestre}</p>
            ${materia.url ? `<div><a href="${materia.url}" target="_blank" class="text-muted"><i class="fa-solid fa-link"></i></a> <a href="https://github.com/RentStudioDH" target="_blank" class="text-muted"><i class="fa-brands fa-github"></i></a></div>` : ''}
          </article>
        `;
        
        // Manejo especial para el carrusel
        const cajaElement = carouselCard.querySelector('.caja');
        cajaElement.style.cursor = 'pointer'; // Cambiamos el cursor para indicar que es clickeable
        cajaElement.addEventListener("click", (e) => {
          e.stopPropagation(); // Evitamos que Slick maneje el click
          openModalForCard();
        });
        
        // Para los enlaces dentro de la tarjeta
        const links = carouselCard.querySelectorAll('a');
        links.forEach(link => {
          link.addEventListener('click', (e) => {
            e.stopPropagation(); // Permitimos que los enlaces funcionen normalmente
          });
        });
        
        materiasCarousel.appendChild(carouselCard);
      });
      
      return fetch("json/listadoTalleres.json");
    })
    .then((response) => response.json())
    .then((data) => {
      const talleresContainer = document.getElementById("talleres-container");
      const talleresCarousel = document.createElement('div');
      talleresCarousel.className = 'talleres-carousel';
      talleresContainer.parentNode.insertBefore(talleresCarousel, talleresContainer.nextSibling);
      
      data.forEach(function (taller) {
        // Función para abrir modal (reutilizable)
        const openModalForCard = () => {
          openModal(
            taller.nombre,
            taller.bimestre,
            taller.descripcion,
            taller.githubLink,
            taller.modulos,
            taller.palabrasClave
          );
        };
        
        // Card para grid (original)
        const gridCard = document.createElement("div");
        gridCard.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");
        gridCard.innerHTML = `
          <article class="caja">
            <img src="${taller.imgUrl}" alt="${taller.nombre}">
            <h3 class="nombre">${taller.nombre}</h3>
            <p class="bimestre">${taller.bimestre}</p>
          </article>
        `;
        gridCard.addEventListener("click", openModalForCard);
        talleresContainer.appendChild(gridCard);
        
        // Card para carrusel
        const carouselCard = document.createElement("div");
        carouselCard.classList.add("px-2", "carrusel-card"); // Añadimos clase adicional
        carouselCard.innerHTML = `
          <article class="caja">
            <img src="${taller.imgUrl}" alt="${taller.nombre}">
            <h3 class="nombre">${taller.nombre}</h3>
            <p class="bimestre">${taller.bimestre}</p>
          </article>
        `;
        
        // Manejo especial para el carrusel
        const cajaElement = carouselCard.querySelector('.caja');
        cajaElement.style.cursor = 'pointer';
        cajaElement.addEventListener("click", (e) => {
          e.stopPropagation();
          openModalForCard();
        });
        
        talleresCarousel.appendChild(carouselCard);
      });
    })
    .then(() => {
      initCarousels();
    });
}

// Inicializar todo cuando se cargue la página
window.addEventListener('DOMContentLoaded', function() {
  loadDependencies().then(() => {
    setupCards();
    
    // Manejar redimensionamiento
    window.addEventListener('resize', function() {
      initCarousels();
    });
  });
});