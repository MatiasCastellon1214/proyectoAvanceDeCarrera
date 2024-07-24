
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
          ${materia.url ? `<div><a href="${materia.url}" target="_blank" class="text-muted"><i class="fa-solid fa-link"></i></a> <a href="https://github.com/1774-ProyectoIntegrador/" target="_blank" class="text-muted"><i class="fa-brands fa-github"></i></a></div>` : ""}
          
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




