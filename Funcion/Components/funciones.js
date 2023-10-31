import { ArregloFunciones } from "../../Services/serviceFuncion.js";
import { cardFuncion } from "./cardFuncion.js";
export async function cargarFunciones() {
  let funciones = await ArregloFunciones.funciones("", "", "");
  let Cartelera = funciones
    .map((pelicula) =>
      cardFuncion(
        pelicula.pelicula.peliculaId,
        pelicula.pelicula.titulo,
        pelicula.pelicula.poster
      )
    )
    .join("");
  document.getElementById("funcion").innerHTML = Cartelera;
  console.log(funciones);
}
