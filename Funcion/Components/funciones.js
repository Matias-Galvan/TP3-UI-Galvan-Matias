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
document.getElementById("buscar").addEventListener("click", (e) => {
  e.preventDefault();
  buscarFunciones();
});
export async function buscarFunciones() {
  let generoId;
  let fecha = document.getElementById("fecha").value.toLocaleString();
  let titulo = document.getElementById("titulo").value;
  let genero = document.getElementById("genero").value;
  if (genero != "") {
    generoId = parseInt(genero);
  } else {
    generoId = "";
  }

  cargarFuncionesFiltro(fecha, titulo, generoId);
}
export async function cargarFuncionesFiltro(fecha, titulo, generoId) {
  let funciones = await ArregloFunciones.funciones(fecha, titulo, generoId);
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
