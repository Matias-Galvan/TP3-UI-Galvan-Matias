import { cardPelicula } from "./Components/cardPelicula.js";
import { PeliculaDetalle } from "../Services/servicePelicula.js";
import {
  ArregloFunciones,
  ArregloFuncionesDisponibles,
} from "../Services/serviceFuncion.js";
import { TablaFunciones } from "./Components/cardTablaFunciones.js";
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
window.onload = async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const peliculaId = urlParams.get("id");
  await cargarPelicula(peliculaId);
  BotonTexto();
};

function cargarModal() {
  document.addEventListener("click", function () {
    const startWizardBtn = document.getElementById("start-wizard");
    const wizardModal = new bootstrap.Modal(
      document.getElementById("wizard-modal")
    );
    const modalTitle = document.getElementById("modal-title");
    const prevStepBtn = document.getElementById("prev-step");
    const nextStepBtn = document.getElementById("next-step");
    const progressBar = document.getElementById("progress-bar");

    let currentStep = 1;
    const totalSteps = 3; // Cambia esto al número de pasos que tengas

    // Función para mostrar el paso actual
    function showStep(step) {
      modalTitle.textContent = "Asistente - Paso " + step;
      const modalBody = document.querySelector(".modal-body");
      modalBody.textContent = "Contenido del Paso " + step;

      // Actualizar la barra de progreso
      const progress = ((step - 1) / (totalSteps - 1)) * 100;
      progressBar.style.width = progress + "%";
      progressBar.setAttribute("aria-valuenow", progress);
    }

    // Evento para avanzar al siguiente paso
    nextStepBtn.addEventListener("click", function () {
      if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
      }
    });

    // Evento para retroceder al paso anterior
    prevStepBtn.addEventListener("click", function () {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
      }
    });

    // Evento para iniciar el asistente al hacer clic en el botón
    startWizardBtn.addEventListener("click", function () {
      currentStep = 1;
      showStep(currentStep);
      wizardModal.show();
    });
  });
}

async function cargarPelicula(peliculaId) {
  let pelicula = await PeliculaDetalle.peliculaDetalle(peliculaId);
  let FuncionesPelicula = await ArregloFunciones.funciones(
    "",
    pelicula.titulo,
    ""
  );
  let Cartelera = cardPelicula(
    pelicula.peliculaId,
    pelicula.titulo,
    pelicula.poster,
    pelicula.genero.nombre,
    pelicula.trailer,
    pelicula.sinopsis
  );
  document.getElementById("content-pelicula").innerHTML = Cartelera;
  CargarFuncionesDisponibles(FuncionesPelicula);
  const botones = document.querySelectorAll(".modalComprar");
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      cargarModal();
    });
  });
  console.log(pelicula);
}

async function CargarFuncionesDisponibles(funciones) {
  if (funciones.length == 0) {
    console.log("No hay funciones disponibles");
    return;
  }

  let llenarTabla = funciones
    .map((funcion) =>
      TablaFunciones(
        funcion.funcionId,
        funcion.fecha,
        funcion.horario,
        funcion.sala.nombre,
        funcion.sala.capacidad
      )
    )
    .join("");
  document.getElementById("tabla-alquileres").innerHTML = llenarTabla;
}
function BotonTexto() {
  const button = document.querySelector('[data-bs-target="#collapseExample"]');
  const collapse = document.querySelector(".collapse");
  collapse.addEventListener("shown.bs.collapse", function () {
    button.textContent = "OCULTAR FUNCIONES";
  });
  collapse.addEventListener("hidden.bs.collapse", function () {
    button.textContent = "VER FUNCIONES";
  });
}
