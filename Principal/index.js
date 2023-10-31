// const response = async () => {
//   const config = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   try {
//     const response = await fetch(
//       `http://localhost:5176/api/v1/Pelicula/15`,
//       config
//     );
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
import { ArregloFunciones } from ".././Services/serviceFuncion.js";
import { cargarFunciones } from ".././Funcion/Components/funciones.js";
const btnLogin = document.querySelector("#btn");
btnLogin.addEventListener("click", cargarFunciones);

async function logMovies() {
  const response = await fetch("http://localhost:5176/api/v1/Pelicula/13");
  const movies = await response.json();
  console.log(movies);
}
