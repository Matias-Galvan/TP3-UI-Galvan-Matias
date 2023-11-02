import { cardPelicula } from "./Components/cardPelicula.js";
import { PeliculaDetalle } from "../Services/servicePelicula.js";
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
window.onload = async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const peliculaId = urlParams.get("id");
  //const pelicula = localStorage.getItem("PeliculaIdDetalle");
  await cargarPelicula(peliculaId);
};

async function cargarPelicula(peliculaId) {
  let pelicula = await PeliculaDetalle.peliculaDetalle(peliculaId);
  let Cartelera = cardPelicula(
    pelicula.peliculaId,
    pelicula.titulo,
    pelicula.poster,
    pelicula.genero.nombre,
    pelicula.trailer,
    pelicula.sinopsis
  );
  document.getElementById("content-pelicula").innerHTML = Cartelera;
  console.log(pelicula);
}
