const footerContent = `
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <a href="https://www.linkedin.com/in/matías-castellón-54ab03252" target="_blank" class="me-4">
        <i class="fab fa-linkedin fa-2x" style="color: #523a04"></i>
      </a>
      <a href="https://github.com/MatiasCastellon1214" target="_blank" class="text-decoration-none text-white me-4">
        <i class="fab fa-github fa-2x" style="color: #523a04"></i>
      </a>
      <a href="#" class="text-decoration-none text-white" id="emailIcon" title="tu_correo@dominio.com">
        <i class="far fa-envelope fa-2x" style="color: #523a04"></i>
      </a>
    </div>
  </div>
</div>
`



const footerContainer = document.querySelector('#footer-section');

footerContainer.innerHTML += footerContent;

const emailIcon = document.getElementById("emailIcon");

emailIcon.addEventListener("click", function(){
  alert("mirtybmx@gmail.com")
})