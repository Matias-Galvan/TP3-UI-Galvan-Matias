import { cardPelicula } from "./Components/cardPelicula.js";
import { PeliculaDetalle } from "../Services/servicePelicula.js";
import { DetalleCompra } from "../Ticket/Components/cardTicket.js";
import { listadoTickets } from "../Ticket/Components/detalleDeCompra.js";
import {
  ArregloFunciones,
  ArregloFuncionesDisponibles,
  ArregloFuncion,
  ComprarTicketResponse,
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
      console.log(e.target.id);
      ComprarTicket(e.target.id);
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
  document.getElementById("tabla-funciones").innerHTML = llenarTabla;
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

export async function ComprarTicket(FuncionId) {
  let funcion = await ArregloFuncion.FuncionDisponible(FuncionId);
  console.log(funcion);
  let DetalleTicketRequest = DetalleCompra(
    funcion.pelicula.poster,
    new Date(funcion.fecha).toLocaleDateString(),
    funcion.horario,
    funcion.sala.nombre,
    funcion.sala.capacidad,
    funcion.pelicula.titulo,
    funcion.pelicula.genero.nombre,
    funcion.funcionId
  );
  document.getElementById("DetalleTicketModal").innerHTML =
    DetalleTicketRequest;
  const boton = document.querySelector(".modalComprarTicket");
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.id);
    ComprarTicketRequest(e.target.id, boton);
  });
}

export async function ComprarTicketRequest(FuncionId, boton) {
  const id = parseInt(FuncionId);
  const cantidad = parseInt(document.getElementById("recipient-name").value);
  const nombre = document.getElementById("message-text").value;
  const body = {
    cantidad: cantidad,
    usuario: nombre,
  };
  const response = await ComprarTicketResponse(id, body);
  let detalle = response.tickets
    .map((ticket) =>
      listadoTickets(
        ticket.ticketId,
        response.funcion.fecha,
        response.funcion.horario,
        response.funcion.pelicula.poster,
        response.funcion.pelicula.titulo,
        response.funcion.sala.nombre,
        response.funcion.sala.capacidad,
        response.funcion.usuario
      )
    )
    .join("");
  document.getElementById("notificacion-compra").innerHTML = detalle;
  const miModal = new bootstrap.Modal(document.getElementById("exampleModal"));
  miModal.hide();
  const toastLiveExample = document.getElementById("liveToast");

  if (boton) {
    const toastBootstrap =
      bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    boton.addEventListener("click", () => {
      toastBootstrap.show();
    });
  }
}
