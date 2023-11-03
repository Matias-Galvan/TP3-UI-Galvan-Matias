import { ArregloFunciones } from ".././Services/serviceFuncion.js";
import { cargarFunciones } from ".././Funcion/Components/funciones.js";
import { navegarDetallePelicula } from ".././Funcion/Components/funciones.js";
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
