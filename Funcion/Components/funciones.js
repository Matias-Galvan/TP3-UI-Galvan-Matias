import { ArregloFunciones } from "../../Services/serviceFuncion.js";
import { cardFuncion } from "./cardFuncion.js";
window.onload = function () {
  cargarFunciones();
  navegarDetalleFuncion();
};

export async function cargarFunciones() {
  let funciones = await ArregloFunciones.funciones("", "", "");
  const peliculas = new Set();
  const funcionesFiltradas = funciones.filter((funcion) => {
    if (!peliculas.has(funcion.pelicula.peliculaId)) {
      peliculas.add(funcion.pelicula.peliculaId);
      return true;
    }
  });
  let Cartelera = funcionesFiltradas
    .map((pelicula) =>
      cardFuncion(
        pelicula.funcionId,
        pelicula.pelicula.peliculaId,
        pelicula.pelicula.titulo,
        pelicula.pelicula.poster,
        pelicula.pelicula.genero.nombre
      )
    )
    .join("");
  document.getElementById("funcion").innerHTML = Cartelera;
  const botones = document.querySelectorAll(".navigateDetalle");
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      navegarDetallePelicula(e.target.id);
    });
  });
  console.log(funciones);
}

export async function cargarFuncionesFiltro(fecha, titulo, genero) {
  let funciones = await ArregloFunciones.funciones(fecha, titulo, genero);
  const peliculas = new Set();
  const funcionesFiltradas = funciones.filter((funcion) => {
    if (!peliculas.has(funcion.pelicula.peliculaId)) {
      peliculas.add(funcion.pelicula.peliculaId);
      return true;
    }
  });
  let Cartelera = funcionesFiltradas
    .map((pelicula) =>
      cardFuncion(
        pelicula.funcionId,
        pelicula.pelicula.peliculaId,
        pelicula.pelicula.titulo,
        pelicula.pelicula.poster,
        pelicula.pelicula.genero.nombre
      )
    )
    .join("");
  document.getElementById("funcion").innerHTML = Cartelera;
  console.log(funciones);
}
// document.addEventListener("click", (e) => {
//   localStorage.setItem("PeliculaIdDetalle", e.target.id);
//   navegarDetallePelicula(e.target.id);
// });

export async function DetalleFuncion(funcionId) {
  let funciones = await ArregloFunciones.funciones("", "", "");
  let funcion = funciones.find((funcion) => funcion.funcionId == funcionId);
  let cartelera = document.getElementById("cartelera");
}

export async function navegarDetallePelicula(peliculaId) {
  window.location.href = `.././Pelicula/pelicula.html?id=${peliculaId}`;
}

export function navegarDetalleFuncion() {}
